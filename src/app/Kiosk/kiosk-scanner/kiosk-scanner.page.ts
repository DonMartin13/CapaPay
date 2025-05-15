import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";
import { KioskNavbarComponent } from '../../Components/kiosk-navbar/kiosk-navbar.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-kiosk-scanner',
  templateUrl: './kiosk-scanner.page.html',
  styleUrls: ['./kiosk-scanner.page.scss'],
  imports: [ZXingScannerModule, IonInput, KioskNavbarComponent, IonTitle, IonHeader, IonItem, IonApp, IonLabel, IonContent, IonToolbar] 

})
export class KioskScannerPage implements OnInit {

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
