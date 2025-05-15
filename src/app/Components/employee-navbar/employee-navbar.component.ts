import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrls: ['./employee-navbar.component.scss'],
  imports: [IonFabButton, IonFab, IonIcon, IonTabButton, IonTabBar]
})
export class EmployeeNavbarComponent  implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {}

  goToHome() {
    this.router.navigate(['/admin-home']);
  }
  goToTransactionHistory() {
    this.router.navigate(['/admin-transaction-history']);
  }
  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }
  goToQR() {
    this.router.navigate(['/admin-qr-generator']);
  }
  goToProfile() {
    this.router.navigate(['/admin-profile']);
  }
  goToPaymentMethod() {
    this.router.navigate(['/admin-wallet-method']);
  }

}
