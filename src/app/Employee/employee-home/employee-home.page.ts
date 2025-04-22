import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCardSubtitle, IonCardTitle, IonText, IonCard, IonCardHeader, IonInput } from "@ionic/angular/standalone";

import { EmployeeNavbarComponent } from '../../Components/employee-navbar/employee-navbar.component';


@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.page.html',
  styleUrls: ['./employee-home.page.scss'],
  imports: [IonInput, IonCardHeader, IonCard, IonText, IonCardTitle, IonCardSubtitle, EmployeeNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class EmployeeHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchInput = '';
  companyCode: string | null = null;
  companyName: string | null = null;
  isWaitingForApproval = false;

  onSearchChange() {
    // Example lookup (replace with actual service or logic)
    if (this.searchInput.toLowerCase() === 'abc123' || this.searchInput.toLowerCase() === 'mycompany') {
      this.companyCode = 'ABC123';
      this.companyName = 'My Company Inc.';
    } else {
      this.companyCode = null;
      this.companyName = null;
    }
  }

  joinCompany() {
    this.isWaitingForApproval = true;
    // Add actual logic to send join request here
  }

}
