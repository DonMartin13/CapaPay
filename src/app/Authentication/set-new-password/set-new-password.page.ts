import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.page.html',
  styleUrls: ['./set-new-password.page.scss'],
  imports: [IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components

})
export class SetNewPasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
