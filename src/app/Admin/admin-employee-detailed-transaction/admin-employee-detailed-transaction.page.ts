import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSelectOption,IonSelect,IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar, IonCard, IonPopover } from "@ionic/angular/standalone";
import { TransactionService } from 'src/app/services/transaction.service';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-employee-detailed-transaction',
  templateUrl: './admin-employee-detailed-transaction.page.html',
  styleUrls: ['./admin-employee-detailed-transaction.page.scss'],
  imports: [CommonModule, IonPopover, IonSearchbar, IonGrid, IonRow, IonCol, IonItem, IonList, IonButton, IonApp, IonIcon, IonContent, StatusBarComponent] 

})
export class AdminEmployeeDetailedTransactionPage implements OnInit {
  userId!: string;
  transactions: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('userId')!;
    this.fetchTransactions();
  }

  fetchTransactions() {
    this.transactionService.getTransactionsByUserId(this.userId).subscribe({
      next: (data) => {
        this.transactions = data;
        console.log('Fetched transactions:', data);
      },
      error: (err) => {
        console.error('Failed to fetch transactions:', err);
      }
    });
  }
  get totalSpent(): number {
    return this.transactions.reduce((sum, t) => sum + t.amount, 0);
  }
  goBack() {
    this.router.navigate(['/admin-employee-transaction-report']);
  }


  searchText: string = '';

  onSearchChange(event: any) {
    console.log('Searching for:', this.searchText);
  }
  
  onFilterSelect(option: string) {
    console.log('Filter selected:', option);
    
  }
  
}
