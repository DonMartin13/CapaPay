import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { TransactionService } from '../../services/transaction.service';
import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeNavbarComponent } from "../../Components/employee-navbar/employee-navbar.component";
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-transaction-history',
  templateUrl: './admin-transaction-history.page.html',
  styleUrls: ['./admin-transaction-history.page.scss'],
  imports: [CommonModule, AdminNavbarComponent, IonItem, IonList, IonApp, IonIcon, IonLabel, IonContent, EmployeeNavbarComponent, StatusBarComponent] 
})
export class AdminTransactionHistoryPage implements OnInit {
  groupedTransactions: { date: string, transactions: any[] }[] = [];
  user: any = null;  
  recentTransactions: any[] = [];

  constructor(
    private router: Router,
    private transactionService: TransactionService,
  ) {}

  ngOnInit() {
    
    const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        this.getTransactions(this.user.id);
      }
  }

  
  getTransactions(userId: string) {
    this.transactionService.getTransactionsByUserId(userId).subscribe({
      next: (res: any) => {
        const grouped = this.groupTransactionsByDate(res);
        
        this.groupedTransactions = Object.keys(grouped).map(date => ({
          date,
          transactions: grouped[date]
        }));
      },
      error: (err) => {
        console.error('Error fetching transactions:', err);
      }
    });    
  }
  groupTransactionsByDate(transactions: any[]) {
    const grouped: { [date: string]: any[] } = {};
  
    transactions.forEach((transaction) => {
      const date = new Date(transaction.createdDate).toDateString(); 
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(transaction);
    });
  
    return grouped;
  }  

  // Navigate to Notification page
  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }
  goToReceipt(transaction: any) {
    this.router.navigate(['/admin-receipt', transaction.id]);
  }  

}
