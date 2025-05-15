import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonButtons, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRefresher, IonRefresherContent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { WalletService } from '../../services/wallet.service';
import { TransactionService } from '../../services/transaction.service';
import { JoinCompanyComponent } from "../../Components/join-company/join-company.component";
import { EmployeeNavbarComponent } from "../../Components/employee-navbar/employee-navbar.component";
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
  imports: [IonRefresherContent, IonRefresher, CommonModule, AdminNavbarComponent, IonItem, IonListHeader, IonList, IonApp, IonIcon, IonLabel, IonContent, JoinCompanyComponent, EmployeeNavbarComponent, StatusBarComponent] 
})
export class AdminHomePage implements OnInit {
  user: any = null;
  balance: number = 0;
  recentTransactions: any[] = [];

  constructor(
    private router: Router,
    private walletService: WalletService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {
    console.log('AdminHomePage ngOnInit called');
    

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      console.log(typeof this.user.companyId, this.user.companyId);
    }
    
  }
  

  ionViewWillEnter() {
    console.log('AdminHomePage ionViewWillEnter called');
    if (this.user) {
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

    this.transactionService.getTransactionsByUserId(userId, 5).subscribe({
      next: (res: any) => {
        this.recentTransactions = res;
      },
      error: (err) => {
        console.error('Error fetching transactions:', err);
      }
    });
  }
  refresh(event: any) {
    if (this.user) {
      this.fetchWalletData(this.user.id);
    }
  
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }  

  goToEmployeeTransactionReport() {
    this.router.navigate(['/admin-employee-transaction-report']);
  }

  goToKioskManagement() {
    this.router.navigate(['/admin-kiosk-management']);
  }

  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }

}

