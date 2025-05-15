import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonAvatar, IonInput } from "@ionic/angular/standalone";
import { EmployeeNavbarComponent } from '../../Components/employee-navbar/employee-navbar.component';


@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.page.html',
  styleUrls: ['./employee-profile.page.scss'],
  imports: [IonInput, IonAvatar, EmployeeNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

})
export class EmployeeProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
