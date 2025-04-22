import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-register-option',
  templateUrl: './register-option.page.html',
  styleUrls: ['./register-option.page.scss'],
  imports: [IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class RegisterOptionPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
  goToKioskRegister() {
    this.router.navigate(['/kiosk-register']);
  }

}
