import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeNavbarComponent } from '../../Components/employee-navbar/employee-navbar.component';
import { WalletService } from '../../services/wallet.service';
import { TransactionService } from '../../services/transaction.service';
import { IonApp, IonContent, IonIcon, IonList, IonListHeader, IonItem, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.page.html',
  styleUrls: ['./employee-home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonListHeader, IonList, IonIcon, IonContent, IonApp, CommonModule, EmployeeNavbarComponent]
})
export class EmployeeHomePage implements OnInit {

  user: any = null;
  balance: number = 0;
  recentTransactions: any[] = [];

  constructor(
    private walletService: WalletService,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.fetchWalletData(this.user.id);
    }
  }

  fetchWalletData(userId: string) {
    this.walletService.getWallet(userId).subscribe({
      next: (res: any) => {
        this.balance = res.balance;
      },
      error: (err) => {
        console.error('Error fetching balance:', err);
      }
    });

    this.transactionService.getTransactionsByUserId(userId).subscribe({
      next: (res: any) => {
        this.recentTransactions = res.transactions;
      },
      error: (err) => {
        console.error('Error fetching transactions:', err);
      }
    });
  }
}
