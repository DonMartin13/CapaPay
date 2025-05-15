import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonAvatar, IonInput } from "@ionic/angular/standalone";
import { KioskNavbarComponent } from '../../Components/kiosk-navbar/kiosk-navbar.component';

@Component({
  selector: 'app-kiosk-profile',
  templateUrl: './kiosk-profile.page.html',
  styleUrls: ['./kiosk-profile.page.scss'],
  imports: [IonInput, IonAvatar, KioskNavbarComponent, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

})
export class KioskProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
