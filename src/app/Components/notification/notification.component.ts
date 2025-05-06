import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid, IonRadio, IonPopover } from "@ionic/angular/standalone";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  imports: [IonPopover, IonRadio, IonGrid, IonInput, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] // ✅ Import required Ionic components

})
export class NotificationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onFilterSelect(option: string) {
    console.log('Filter selected:', option);
    if (option === 'Sent') {

    } 
    else if (option === 'Recieved') {

    }
    else if (option === 'All') {

    }
  }

}
