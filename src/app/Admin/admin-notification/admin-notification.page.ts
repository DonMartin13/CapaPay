import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio, IonPopover } from "@ionic/angular/standalone";

import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { NotificationComponent } from '../../Components/notification/notification.component';


@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.page.html',
  styleUrls: ['./admin-notification.page.scss'],
  imports: [NotificationComponent, IonPopover, AdminNavbarComponent, IonRadio, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminNotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onFilterSelect(option: string) {
    console.log('Filter selected:', option);
    if (option === 'Sent') {

    } 
    else if (option === 'Recieved') {

    }
  }

}
