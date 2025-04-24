import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCardSubtitle, IonCardTitle, IonText, IonCard, IonCardHeader, IonInput } from "@ionic/angular/standalone";

@Component({
  selector: 'app-employee-credit-details',
  templateUrl: './employee-credit-details.page.html',
  styleUrls: ['./employee-credit-details.page.scss'],
    imports: [IonInput, IonCardHeader, IonCard, IonText, IonCardTitle, IonCardSubtitle, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
  
})
export class EmployeeCreditDetailsPage implements OnInit {

  spent = 3000;
  max = 5000;

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/employee-home']);
  }
  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }



}
