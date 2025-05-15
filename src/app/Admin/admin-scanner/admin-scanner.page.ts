import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { Camera } from '@capacitor/camera';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common'; 
import * as CryptoJS from 'crypto-js';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-scanner',
  templateUrl: './admin-scanner.page.html',
  styleUrls: ['./admin-scanner.page.scss'],
  imports: [CommonModule, IonInput, ZXingScannerModule, IonItem, IonApp, IonIcon, IonLabel, IonContent, StatusBarComponent],
  providers: [BarcodeScanner]
})
export class AdminScannerPage implements OnInit {
  scannedData: string = '';
  price: number = 0;

  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner,
    private location: Location) {}

    ngOnInit() {
      this.askForPermissions().then(() => {
        this.scanQRCode();
      });
    }

  async askForPermissions() {
    try {
      const permission = await Camera.requestPermissions();
      if (permission.camera !== 'granted') {
        console.warn('Camera permission not granted');
      }
    } catch (err) {
      console.error('Error requesting camera permission', err);
    }
  }

  scanQRCode() {
    this.barcodeScanner
      .scan({
        prompt: 'Scan a QR code',
        formats: 'QR_CODE',
        orientation: 'portrait'
      })
      .then(barcodeData => {
        console.log('data', barcodeData);
        this.scannedData = barcodeData.text;
  
        const secretKey = 'bGf8N8MzxyATGe9Xk7PZ3QRkvvEZKxUkQEDvS1IYj1w=';
        const decrypted = CryptoJS.AES.decrypt(this.scannedData, secretKey).toString(CryptoJS.enc.Utf8);
        console.log('Decrypted data:', decrypted);
        this.router.navigate(['/admin-instant-send'], { state: { userNumber: decrypted } });
      })
      .catch(err => {
        console.log('Error', err);
      });
  }  
  goBack() {
    this.location.back();
  }
}
