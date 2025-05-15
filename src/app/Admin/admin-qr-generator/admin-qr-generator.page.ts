import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCardContent,  } from "@ionic/angular/standalone";
import * as CryptoJS from 'crypto-js';
import { QRCodeComponent } from 'angularx-qrcode';
import { IonLoading } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";
@Component({
  selector: 'app-admin-qr-generator',
  templateUrl: './admin-qr-generator.page.html',
  styleUrls: ['./admin-qr-generator.page.scss'],
  imports: [QRCodeComponent, IonApp, IonIcon, IonContent, IonLoading, CommonModule, StatusBarComponent] 
  
})
export class AdminQrGeneratorPage implements OnInit {
  user: any;
  qrData: string = '';
  loading = false;
  private intervalId: any;
  private secretKey: string = 'bGf8N8MzxyATGe9Xk7PZ3QRkvvEZKxUkQEDvS1IYj1w=';

  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.generateQr();
    }

    this.intervalId = setInterval(() => {
      if (this.user) {
        this.generateQr();
      }
    }, 30000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  generateQr() {
    this.loading = true;
    setTimeout(() => {
      this.qrData = this.encryptData(this.user.userNumber);
      this.loading = false;
    }, 500); 
  }

  encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  goToHome() {
    this.router.navigate(['/admin-home']);
  }
}
