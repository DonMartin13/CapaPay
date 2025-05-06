import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonPopover } from "@ionic/angular/standalone";

import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { TransactionHistoryComponent } from '../../Components/transaction-history/transaction-history.component';


@Component({
  selector: 'app-admin-transaction-history',
  templateUrl: './admin-transaction-history.page.html',
  styleUrls: ['./admin-transaction-history.page.scss'],
  imports: [TransactionHistoryComponent,IonPopover, AdminNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminTransactionHistoryPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }

}
