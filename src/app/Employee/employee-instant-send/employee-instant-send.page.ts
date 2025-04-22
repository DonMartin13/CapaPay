import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-employee-instant-send',
  templateUrl: './employee-instant-send.page.html',
  styleUrls: ['./employee-instant-send.page.scss'],
  imports: [IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonInput] 

})
export class EmployeeInstantSendPage implements OnInit {

    constructor(private router: Router ) { }

  ngOnInit() {
  }
  goBackHome() {
    this.router.navigate(['/employee-home']);
  }
  goToConfirmationPayment() {
    this.router.navigate(['/employee-payment-confirmation']);
  }
}
