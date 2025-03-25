import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio } from "@ionic/angular/standalone";

@Component({
  selector: 'app-kiosk-notification',
  templateUrl: './kiosk-notification.page.html',
  styleUrls: ['./kiosk-notification.page.scss'],
  imports: [IonRadio, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class KioskNotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
