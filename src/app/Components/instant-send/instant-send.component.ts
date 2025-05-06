import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid, IonRadio, IonPopover, IonCardContent, IonCard, IonButtons, IonModal, IonTextarea, IonNote } from "@ionic/angular/standalone";

@Component({
  selector: 'app-instant-send',
  templateUrl: './instant-send.component.html',
  styleUrls: ['./instant-send.component.scss'],
  imports: [IonNote, IonTextarea, IonModal, IonButtons, IonCard, IonCardContent, IonPopover, IonRadio, IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components

})
export class InstantSendComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  showTransferFrom = false;

  selectedAccount = {
    type: '',
    number: '',
    amount: ''
  };
  
  selectAccount(account: any) {
    this.selectedAccount = account;
    this.showTransferFrom = false; // Close modal after selection
  }

}
