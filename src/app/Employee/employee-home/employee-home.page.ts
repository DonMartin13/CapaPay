import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCardSubtitle, IonCardTitle, IonText, IonCard, IonCardHeader, IonInput, IonRow, IonCol, IonGrid } from "@ionic/angular/standalone";

import { EmployeeNavbarComponent } from '../../Components/employee-navbar/employee-navbar.component';
import { Router } from '@angular/router';
import { BalanceContainerComponent } from '../../Components/balance-container/balance-container.component';



@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.page.html',
  styleUrls: ['./employee-home.page.scss'],
  imports: [BalanceContainerComponent,IonGrid, IonCol, IonRow, IonInput, IonCardHeader, IonCard, IonText, IonCardTitle, IonCardSubtitle, EmployeeNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class EmployeeHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCreditDetials() {
    this.router.navigate(['/employee-credit-details']);
  }


  

 

}
