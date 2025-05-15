import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelectOption,IonSelect,IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar, IonCard, IonPopover } from "@ionic/angular/standalone";
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-kiosk-transaction-report',
  templateUrl: './admin-kiosk-transaction-report.page.html',
  styleUrls: ['./admin-kiosk-transaction-report.page.scss'],
  imports: [IonPopover, IonSearchbar, IonGrid, IonRow, IonCol, IonItem, IonList, IonButton, IonApp, IonIcon, IonContent, StatusBarComponent] 

})
export class AdminKioskTransactionReportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/admin-balance-management']);
  }
  
  goToDetailedTransaction() {
    this.router.navigate(['/admin-kiosk-detailed-transaction']);
  }



  searchText: string = '';

  onSearchChange(event: any) {
    console.log('Searching for:', this.searchText);
  }
  
  onFilterSelect(option: string) {
    console.log('Filter selected:', option);
    if (option === 'Employee') {
      this.router.navigate(['/admin-employee-transaction-report']);
    } else if (option === 'Kiosk') {
      this.router.navigate(['/admin-kiosk-transaction-report']);
    }
  }
  

}
