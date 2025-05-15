import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-register-option',
  templateUrl: './register-option.page.html',
  styleUrls: ['./register-option.page.scss'],
  imports: [] 
})
export class RegisterOptionPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  goToRegister(role: string) {
    this.router.navigate(['/register'], { state: { role } });
  }  

}
