import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelectOption,IonSelect,IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar, IonCard, IonPopover } from "@ionic/angular/standalone";
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-kiosk-detailed-transaction',
  templateUrl: './admin-kiosk-detailed-transaction.page.html',
  styleUrls: ['./admin-kiosk-detailed-transaction.page.scss'],
  imports: [IonPopover, IonSearchbar, IonGrid, IonRow, IonCol, IonItem, IonList, IonButton, IonApp, IonIcon, IonContent, StatusBarComponent] 

})
export class AdminKioskDetailedTransactionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/admin-kiosk-transaction-report']);
  }


  searchText: string = '';

  onSearchChange(event: any) {
    console.log('Searching for:', this.searchText);
  }
  
  onFilterSelect(option: string) {
    console.log('Filter selected:', option);
    
  }
  

}
