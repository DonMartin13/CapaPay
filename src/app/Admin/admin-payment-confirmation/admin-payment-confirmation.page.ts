import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { PaymentConfirmationComponent } from '../../Components/payment-confirmation/payment-confirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-payment-confirmation',
  templateUrl: './admin-payment-confirmation.page.html',
  styleUrls: ['./admin-payment-confirmation.page.scss'],
  imports: [PaymentConfirmationComponent,IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
  
})
export class AdminPaymentConfirmationPage implements OnInit {


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
