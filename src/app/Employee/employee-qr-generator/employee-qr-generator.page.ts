import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonInput } from "@ionic/angular/standalone";
import { QrComponent } from '../../Components/qr/qr.component';


@Component({
  selector: 'app-employee-qr-generator',
  templateUrl: './employee-qr-generator.page.html',
  styleUrls: ['./employee-qr-generator.page.scss'],
  imports: [QrComponent,IonInput,  IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

})
export class EmployeeQrGeneratorPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router ) { }

  goBack() {
    this.router.navigate(['/employee-wallet-method']);
  }

  ngOnInit() {
    
  }


  
}
