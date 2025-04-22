import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCheckbox } from "@ionic/angular/standalone";

@Component({
  selector: 'app-employee-payment-confirmation',
  templateUrl: './employee-payment-confirmation.page.html',
  styleUrls: ['./employee-payment-confirmation.page.scss'],
  imports: [IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonCheckbox] 

})
export class EmployeePaymentConfirmationPage implements OnInit {

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


