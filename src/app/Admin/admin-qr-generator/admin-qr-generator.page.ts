import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCardContent, IonCol, IonRow, IonSearchbar, IonPopover, IonGrid } from "@ionic/angular/standalone";

import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-admin-qr-generator',
  templateUrl: './admin-qr-generator.page.html',
  styleUrls: ['./admin-qr-generator.page.scss'],
  imports: [IonGrid, IonPopover, IonSearchbar, IonRow, IonCol,  IonCardContent, QRCodeComponent, IonInput,  IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
  
})
export class AdminQrGeneratorPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router ) { }

  goBack() {
    this.router.navigate(['/admin-wallet-method']);
  }

  qrData: string = 'Initial QR Data';
  private intervalId: any;

  ngOnInit() {
    this.generateQRCode();
    this.intervalId = setInterval(() => {
      this.generateQRCode();
    }, 30000); // Generate a new QR code every 30 seconds
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  generateQRCode() {
    // Generate a random string as QR data (you can customize this)
    this.qrData = Math.random().toString(36).substring(2);
  }
  
}
