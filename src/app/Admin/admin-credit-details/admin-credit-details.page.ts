import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonSegment, IonSegmentButton } from "@ionic/angular/standalone";
import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-credit-details',
  templateUrl: './admin-credit-details.page.html',
  styleUrls: ['./admin-credit-details.page.scss'],
    imports: [IonSegmentButton, IonSegment, AdminNavbarComponent,IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
  
})
export class AdminCreditDetailsPage implements OnInit {

  spent = 234;
  max = 5000;

  constructor(private router: Router) { }


  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/admin-home']);
  }
  goToNotification() {
    this.router.navigate(['/admin-notification']);
  }



  

}

