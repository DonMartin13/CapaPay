import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";


@Component({
  selector: 'app-employee-wallet-method',
  templateUrl: './employee-wallet-method.page.html',
  styleUrls: ['./employee-wallet-method.page.scss'],
    imports: [IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
  
})
export class EmployeeWalletMethodPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/employee-home']);
  }

  goToQR() {
    this.router.navigate(['/employee-qr-generator']);
  }

  goToInstandSend() {
    this.router.navigate(['/employee-instant-send']);
  }

  goToScanner
  () {
    this.router.navigate(['/employee-scanner']);
  }

}
