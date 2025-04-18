import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.scss'],
  imports: [IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components
})
export class EmployeeNavbarComponent  implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/employee-home']);
  }
  goToTransactionHistory() {
    this.router.navigate(['/employee-transaction-history']);
  }
  goToNotification() {
    this.router.navigate(['/employee-notification']);
  }
  goToQR() {
    this.router.navigate(['/employee-qr-generator']);
  }
  goToProfile() {
    this.router.navigate(['/employee-profile']);
  }
  goToWalletMethod() {
    this.router.navigate(['/employee-wallet-method']);
  }


 

}
