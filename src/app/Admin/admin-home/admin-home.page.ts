import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";

import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { BalanceContainerComponent } from '../../Components/balance-container/balance-container.component';



@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
  imports: [BalanceContainerComponent, AdminNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
