import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { ScanPaymentComponent } from '../../Components/scan-payment/scan-payment.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-scan-payment',
  templateUrl: './employee-scan-payment.page.html',
  styleUrls: ['./employee-scan-payment.page.scss'],
  imports: [ScanPaymentComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

})
export class EmployeeScanPaymentPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  goBackHome() {
    this.router.navigate(['/employee-scanner']);
  }
  goToConfirmationPayment() {
    this.router.navigate(['/employee-payment-confirmation']);
  }


}
