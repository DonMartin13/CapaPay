import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";

import { EmployeeNavbarComponent } from '../../Components/employee-navbar/employee-navbar.component';
import { TransactionHistoryComponent } from '../../Components/transaction-history/transaction-history.component';

@Component({
  selector: 'app-employee-transaction-history',
  templateUrl: './employee-transaction-history.page.html',
  styleUrls: ['./employee-transaction-history.page.scss'],
  imports: [TransactionHistoryComponent, EmployeeNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class EmployeeTransactionHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
