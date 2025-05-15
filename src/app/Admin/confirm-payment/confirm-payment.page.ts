import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonTextarea, IonNote, IonButtons, IonModal } from "@ionic/angular/standalone";

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.page.html',
  styleUrls: ['./confirm-payment.page.scss'],
  imports: [IonNote, IonTextarea, IonCard, IonItem, IonButton, IonApp, IonIcon, IonLabel, IonContent, IonInput] 

})
export class ConfirmPaymentPage implements OnInit {

  constructor(private router: Router) { }
  showTransferFrom = false;
  ngOnInit() {
  }
  goBackHome() {
    this.router.navigate(['/admin-wallet-method']);
  }
  goToConfirmationPayment() {
    this.router.navigate(['/admin-payment-confirmation']);
  }
}
