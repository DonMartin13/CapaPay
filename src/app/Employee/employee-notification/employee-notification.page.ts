import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio } from "@ionic/angular/standalone";

import { EmployeeNavbarComponent } from '../../Components/employee-navbar/employee-navbar.component';
import { NotificationComponent } from '../../Components/notification/notification.component';

@Component({
  selector: 'app-employee-notification',
  templateUrl: './employee-notification.page.html',
  styleUrls: ['./employee-notification.page.scss'],
  imports: [NotificationComponent, EmployeeNavbarComponent, IonRadio, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class EmployeeNotificationPage implements OnInit {

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
