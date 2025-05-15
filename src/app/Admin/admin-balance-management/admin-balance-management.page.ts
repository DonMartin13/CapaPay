import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";

import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { WalletService } from 'src/app/services/wallet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-balance-management',
  templateUrl: './admin-balance-management.page.html',
  styleUrls: ['./admin-balance-management.page.scss'],
  imports: [AdminNavbarComponent, IonApp, IonIcon, IonContent, IonInput, CommonModule, FormsModule, StatusBarComponent] 
})
export class AdminBalanceManagementPage implements OnInit {
  initialBalance: number = 5000;
  isEditingBalance: boolean = false;
  isProcessing: boolean = false;

  constructor(
    private router: Router,
    private walletService: WalletService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  confirmCreateCompanyWallet() {
    this.alertController.create({
      header: 'Confirm Wallet Creation',
      message: 'This will create wallets for all users in the company who don’t already have one. Continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.createCompanyWallet()
        }
      ]
    }).then(alert => alert.present());
  }

  toggleEditBalance() {
    this.isEditingBalance = !this.isEditingBalance;
  }

  createCompanyWallet() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      this.showToast('User not found in local storage.', 'danger');
      return;
    }

    const user = JSON.parse(userJson);

    if (this.initialBalance < 0) {
      this.showToast('Initial balance must be zero or greater.', 'danger');
      return;
    }

    const payload = {
      companyId: user.companyId,
      initialBalance: this.initialBalance,
      monthlyLimit: this.initialBalance // same as initial balance
    };

    this.isProcessing = true;

    this.walletService.createCompanyWallet(payload).subscribe({
      next: (res) => {
        this.showToast(`${res} wallet(s) created successfully.`, 'success');
        this.isProcessing = false;
      },
      error: (err) => {
        console.error('Wallet creation failed:', err);
        this.showToast('Failed to create wallets.', 'danger');
        this.isProcessing = false;
      }
    });
  }

  async showToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }

  goToEmployeeTransactionReport() {
    this.router.navigate(['/admin-employee-transaction-report']);
  }

  goToKioskManagement() {
    this.router.navigate(['/admin-kiosk-management']);
  }

  goToEmployeeManagement() {
    this.router.navigate(['/admin-employee-management']);
  }

  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }

  goToCreditDetials() {
    this.router.navigate(['/admin-credit-details']);
  }
}
