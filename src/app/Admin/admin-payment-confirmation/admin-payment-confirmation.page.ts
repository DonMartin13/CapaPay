import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCheckbox } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { CommonModule } from '@angular/common';
import { WalletService } from 'src/app/services/wallet.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { FormsModule } from '@angular/forms';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";
@Component({
  selector: 'app-admin-payment-confirmation',
  templateUrl: './admin-payment-confirmation.page.html',
  styleUrls: ['./admin-payment-confirmation.page.scss'],
  imports: [IonCheckbox, IonItem, IonButton, IonApp, IonIcon, IonLabel, IonContent, CommonModule, FormsModule, StatusBarComponent] 
  
})
export class AdminPaymentConfirmationPage implements OnInit {
  isDisclaimerChecked: boolean = false;
  userNumber: string = '';
  amount: string = '';
  userInfo: any = null;
  user: any = null;
  balance: number = 0;
  constructor(
    private router: Router,
    private userService: UsersService,
    private transactionService: TransactionService,
    private walletService: WalletService
  ) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { userNumber: string; amount: string };

    if (state) {
      this.userNumber = state.userNumber;
      this.amount = state.amount;
      console.log('✅ Received userNumber:', this.userNumber);
      console.log('✅ Received amount:', this.amount);

      this.userService.getUserByUserNumber(this.userNumber).subscribe({
        next: (user) => {
          this.userInfo = user;
        },
        error: (err) => {
          console.error('❌ Failed to fetch user info:', err);
        }
      });
    }
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    if (this.user) {
      this.fetchWalletData(this.user.id);
    }
  }

  sendMoneyToUser() {
    if (!this.user || !this.userInfo || !this.amount) {
      console.error('❌ Missing sender, receiver, or amount');
      return;
    }

    const payload = {
      senderId: this.user.id,
      receiverId: this.userInfo.id,
      amount: parseFloat(this.amount)
    };

    this.transactionService.addTransaction(payload).subscribe({
      next: (response) => {
        console.log('✅ Send money response:', response);
        const transactionId = response?.message?.transactionId;
        if (transactionId) {
          this.router.navigate(['/admin-receipt', transactionId]);
        } else {
          
          console.log('Transaction completed, but no receipt available.');
          this.goBackHome();
        }

      },
      error: (err) => {
        console.error('❌ Failed to send money:', err);
        console.log(err.error?.message || 'Failed to send money.');
      }
    });
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
  }
  goBackHome() {
    this.router.navigate(['/admin-home']);
  }
  goToConfirmationPayment() {
    this.router.navigate(['/employee-payment-confirmation']);
  }

}
