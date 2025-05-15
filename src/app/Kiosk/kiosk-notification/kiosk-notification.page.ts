import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio } from "@ionic/angular/standalone";

import { KioskNavbarComponent } from '../../Components/kiosk-navbar/kiosk-navbar.component';


@Component({
  selector: 'app-kiosk-notification',
  templateUrl: './kiosk-notification.page.html',
  styleUrls: ['./kiosk-notification.page.scss'],
  imports: [KioskNavbarComponent, IonRadio, IonApp, IonIcon, IonContent] 
})
export class KioskNotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
