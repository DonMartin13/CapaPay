import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-admin-instant-send',
  templateUrl: './admin-instant-send.page.html',
  styleUrls: ['./admin-instant-send.page.scss'],
  imports: [IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonInput] 

})
export class AdminInstantSendPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  goBackHome() {
    this.router.navigate(['/admin-wallet-method']);
  }
  goToConfirmationPayment() {
    this.router.navigate(['/admin-payment-confirmation']);
  }

}
