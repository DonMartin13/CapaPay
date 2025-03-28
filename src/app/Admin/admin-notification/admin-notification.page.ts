import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio } from "@ionic/angular/standalone";

import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';


@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.page.html',
  styleUrls: ['./admin-notification.page.scss'],
  imports: [AdminNavbarComponent, IonRadio, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminNotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
