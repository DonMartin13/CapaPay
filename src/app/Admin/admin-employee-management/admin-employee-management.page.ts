import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-admin-employee-management',
  templateUrl: './admin-employee-management.page.html',
  styleUrls: ['./admin-employee-management.page.scss'],
  imports: [IonGrid, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

})
export class AdminEmployeeManagementPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/admin-home']);
  }

}
