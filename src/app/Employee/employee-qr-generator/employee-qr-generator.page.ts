import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-employee-qr-generator',
  templateUrl: './employee-qr-generator.page.html',
  styleUrls: ['./employee-qr-generator.page.scss'],
  imports: [QRCodeComponent, IonApp, IonIcon, IonContent] 

})
export class EmployeeQrGeneratorPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router ) { }

  goToHome() {
    this.router.navigate(['/employee-home']);
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
