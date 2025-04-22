import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";


@Component({
  selector: 'app-admin-wallet-method',
  templateUrl: './admin-wallet-method.page.html',
  styleUrls: ['./admin-wallet-method.page.scss'],
  imports: [IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

})
export class AdminWalletMethodPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/admin-home']);
  }

  goToQR() {
    this.router.navigate(['/admin-qr-generator']);
  }

  goToInstandSend() {
    this.router.navigate(['/admin-instant-send']);
  }

  goToScanner
  () {
    this.router.navigate(['/admin-scanner']);
  }

}
