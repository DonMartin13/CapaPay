import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid, IonRadio, IonPopover, IonCardContent, IonCard, IonButtons, IonModal, IonTextarea, IonNote } from "@ionic/angular/standalone";
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
  imports: [QRCodeComponent, IonNote, IonTextarea, IonModal, IonButtons, IonCard, IonCardContent, IonPopover, IonRadio, IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components

})
export class QrComponent  implements OnInit {

  constructor() { }

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
