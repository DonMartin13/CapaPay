import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-admin-scanner',
  templateUrl: './admin-scanner.page.html',
  styleUrls: ['./admin-scanner.page.scss'],
  imports: [IonInput, ZXingScannerModule, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

})
export class AdminScannerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scannedData: string = '';
  price: number = 0;

  onScanSuccess(result: string) {
    this.scannedData = result;
  }

  onPriceChange(event: any) {
    this.price = event.target.value;
  }

  submit() {
    console.log('QR Data:', this.scannedData);
    console.log('Price:', this.price);
    // Add your submission logic here (e.g., send data to a backend)
  }
  
  
}
