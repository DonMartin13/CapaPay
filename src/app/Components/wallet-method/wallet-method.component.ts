import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid, IonRadio, IonPopover } from "@ionic/angular/standalone";

@Component({
  selector: 'app-wallet-method',
  templateUrl: './wallet-method.component.html',
  styleUrls: ['./wallet-method.component.scss'],
  imports: [IonPopover, IonRadio, IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components

})
export class WalletMethodComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
