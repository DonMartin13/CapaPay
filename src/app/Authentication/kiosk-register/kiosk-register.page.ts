import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-kiosk-register',
  templateUrl: './kiosk-register.page.html',
  styleUrls: ['./kiosk-register.page.scss'],
  imports: [IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components

})
export class KioskRegisterPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToCompany() {
    this.router.navigate(['/company-details']);
  }

}
