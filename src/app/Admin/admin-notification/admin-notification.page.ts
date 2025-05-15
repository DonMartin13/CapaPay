import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonRadio, IonText } from "@ionic/angular/standalone";

import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';
import { EmployeeNavbarComponent } from "../../Components/employee-navbar/employee-navbar.component";
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-notification',
  templateUrl: './admin-notification.page.html',
  styleUrls: ['./admin-notification.page.scss'],
  imports: [CommonModule, IonText, AdminNavbarComponent, IonRadio, IonApp, IonIcon, IonContent, EmployeeNavbarComponent, StatusBarComponent] 
})
export class AdminNotificationPage implements OnInit {
  user: any = null;
  notifications: string[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
    this.listenToNotifications();
  }

  listenToNotifications() {
    this.notificationService.notifications$.subscribe(data => {
      this.notifications = data;
    });
  }

}
