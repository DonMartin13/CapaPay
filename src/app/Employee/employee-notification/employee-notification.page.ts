import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio } from "@ionic/angular/standalone";

import { EmployeeNavbarComponent } from '../../Components/employee-navbar/employee-navbar.component';


@Component({
  selector: 'app-employee-notification',
  templateUrl: './employee-notification.page.html',
  styleUrls: ['./employee-notification.page.scss'],
  imports: [EmployeeNavbarComponent, IonRadio, IonApp, IonIcon, IonContent] 
})
export class EmployeeNotificationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
