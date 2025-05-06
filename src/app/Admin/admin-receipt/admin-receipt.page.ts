import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";
import { ReceiptComponent } from '../../Components/receipt/receipt.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-receipt',
  templateUrl: './admin-receipt.page.html',
  styleUrls: ['./admin-receipt.page.scss'],
  imports: [ReceiptComponent,IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminReceiptPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['/admin-home']);

  }


}
