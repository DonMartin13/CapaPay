import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar, IonPopover } from "@ionic/angular/standalone";


@Component({
  selector: 'app-admin-kiosk-management',
  templateUrl: './admin-kiosk-management.page.html',
  styleUrls: ['./admin-kiosk-management.page.scss'],
  imports: [IonPopover, IonSearchbar, IonGrid, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 
})
export class AdminKioskManagementPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/admin-balance-management']);
  }

  searchText: string = '';

  onSearchChange(event: any) {
    console.log('Searching for:', this.searchText);
  }
  
  onFilterSelect(option: string) {
    console.log('Filter selected:', option);
  }

  approveUser(){

  }

  rejectUser(){

  }

  openPopover(ev: Event, triggerId: string) {
    // Optional: any logic before opening
  }

  editUser(){

  }
  deleteUser(){

  }
  


}
