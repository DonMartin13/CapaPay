import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeNavbarComponent } from '../../Components/employee-navbar/employee-navbar.component';
import { TransactionService } from '../../services/transaction.service';
@Component({
  selector: 'app-employee-transaction-history',
  templateUrl: './employee-transaction-history.page.html',
  styleUrls: ['./employee-transaction-history.page.scss'],
  imports: [CommonModule, EmployeeNavbarComponent, IonItem, IonList, IonApp, IonIcon, IonLabel, IonContent] 
})
export class EmployeeTransactionHistoryPage implements OnInit {
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
  goToReceipt(transaction: any) {
    this.router.navigate(['/employee-receipt', transaction.id]);
  }  

}
