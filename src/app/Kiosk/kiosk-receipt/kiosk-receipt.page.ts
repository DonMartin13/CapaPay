import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-kiosk-receipt',
  templateUrl: './kiosk-receipt.page.html',
  styleUrls: ['./kiosk-receipt.page.scss'],
  imports: [IonTitle, IonHeader, IonContent, IonToolbar] 
})
export class KioskReceiptPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
