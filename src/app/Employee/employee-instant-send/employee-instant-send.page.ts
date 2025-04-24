import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCardContent, IonCard, IonButtons, IonModal, IonTextarea, IonNote } from "@ionic/angular/standalone";

@Component({
  selector: 'app-employee-instant-send',
  templateUrl: './employee-instant-send.page.html',
  styleUrls: ['./employee-instant-send.page.scss'],
  imports: [IonNote, IonTextarea, IonModal, IonButtons, IonCard, IonCardContent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonInput] 

})
export class EmployeeInstantSendPage implements OnInit {

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
    this.router.navigate(['/employee-wallet-method']);
  }
  goToConfirmationPayment() {
    this.router.navigate(['/employee-payment-confirmation']);
  }
}
