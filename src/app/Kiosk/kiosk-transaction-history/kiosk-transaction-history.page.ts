import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { KioskNavbarComponent } from '../../Components/kiosk-navbar/kiosk-navbar.component';


@Component({
  selector: 'app-kiosk-transaction-history',
  templateUrl: './kiosk-transaction-history.page.html',
  styleUrls: ['./kiosk-transaction-history.page.scss'],
  imports: [KioskNavbarComponent, IonApp, IonIcon, IonContent] 
})
export class KioskTransactionHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
