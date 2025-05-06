import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";

import { KioskNavbarComponent } from '../../Components/kiosk-navbar/kiosk-navbar.component';

@Component({
  selector: 'app-kiosk-home',
  templateUrl: './kiosk-home.page.html',
  styleUrls: ['./kiosk-home.page.scss'],
  imports: [KioskNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class KioskHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToCreditDetials(){
  }

}
