import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { ScanPaymentComponent } from '../../Components/scan-payment/scan-payment.component';

@Component({
  selector: 'app-admin-scan-payment',
  templateUrl: './admin-scan-payment.page.html',
  styleUrls: ['./admin-scan-payment.page.scss'],
    imports: [ScanPaymentComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
  
})
export class AdminScanPaymentPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  goBackHome() {
    this.router.navigate(['/admin-scanner']);
  }
  goToConfirmationPayment() {
    this.router.navigate(['/admin-payment-confirmation']);
  }

}
