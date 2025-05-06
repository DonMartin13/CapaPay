import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput, IonCardContent, IonCol, IonRow, IonSearchbar, IonPopover, IonGrid } from "@ionic/angular/standalone";
import { QrComponent } from '../../Components/qr/qr.component';

@Component({
  selector: 'app-admin-qr-generator',
  templateUrl: './admin-qr-generator.page.html',
  styleUrls: ['./admin-qr-generator.page.scss'],
  imports: [QrComponent,IonGrid, IonPopover, IonSearchbar, IonRow, IonCol,  IonCardContent, IonInput,  IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
  
})
export class AdminQrGeneratorPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router ) { }

  goBack() {
    this.router.navigate(['/admin-wallet-method']);
  }

  ngOnInit() {
  }

 
  
}
