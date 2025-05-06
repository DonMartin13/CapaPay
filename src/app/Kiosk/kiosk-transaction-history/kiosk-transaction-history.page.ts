import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { KioskNavbarComponent } from '../../Components/kiosk-navbar/kiosk-navbar.component';
import { TransactionHistoryComponent } from '../../Components/transaction-history/transaction-history.component';
import { NotificationComponent } from '../../Components/notification/notification.component';


@Component({
  selector: 'app-kiosk-transaction-history',
  templateUrl: './kiosk-transaction-history.page.html',
  styleUrls: ['./kiosk-transaction-history.page.scss'],
  imports: [NotificationComponent,TransactionHistoryComponent,KioskNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class KioskTransactionHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
