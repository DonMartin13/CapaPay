import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid, IonRadio, IonPopover, IonAvatar, IonCardContent, IonCard, IonButtons, IonModal, IonNote, IonTextarea } from "@ionic/angular/standalone";

@Component({
  selector: 'app-scan-payment',
  templateUrl: './scan-payment.component.html',
  styleUrls: ['./scan-payment.component.scss'],
  imports: [IonTextarea, IonNote, IonModal, IonButtons, IonCard, IonCardContent, IonAvatar, IonPopover, IonRadio, IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components

})
export class ScanPaymentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
