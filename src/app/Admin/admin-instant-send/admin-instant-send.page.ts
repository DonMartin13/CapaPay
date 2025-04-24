import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonTextarea, IonNote, IonButtons, IonModal } from "@ionic/angular/standalone";

@Component({
  selector: 'app-admin-instant-send',
  templateUrl: './admin-instant-send.page.html',
  styleUrls: ['./admin-instant-send.page.scss'],
  imports: [IonModal, IonButtons, IonNote, IonTextarea, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonInput] 

})
export class AdminInstantSendPage implements OnInit {

  constructor(private router: Router ) { }

  showTransferFrom = false;

  selectedAccount = {
    type: '',
    number: '',
    amount: ''
  };
  
  selectAccount(account: any) {
    this.selectedAccount = account;
    this.showTransferFrom = false; // Close modal after selection
  }

  ngOnInit() {
  }
  goBackHome() {
    this.router.navigate(['/admin-wallet-method']);
  }
  goToConfirmationPayment() {
    this.router.navigate(['/admin-payment-confirmation']);
  }

}
