import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid } from "@ionic/angular/standalone";


@Component({
  selector: 'app-kiosk-navbar',
  templateUrl: './kiosk-navbar.component.html',
  styleUrls: ['./kiosk-navbar.component.scss'],
  imports: [IonFabButton, IonFab, IonIcon, IonTabButton, IonTabBar] // ✅ Import required Ionic components
 // ✅ Import required Ionic components

})
export class KioskNavbarComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/kiosk-home']);
  }
  goToTransactionHistory() {
    this.router.navigate(['/kiosk-transaction-history']);
  }
  goToNotification() {
    this.router.navigate(['/kiosk-notification']);
  }
  goToProfile() {
    this.router.navigate(['/kiosk-profile']);
  }
  goToScanner() {
    this.router.navigate(['/kiosk-scanner']);
  }

}
