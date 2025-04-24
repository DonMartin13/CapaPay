import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelectOption,IonSelect,IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar, IonCard, IonPopover } from "@ionic/angular/standalone";


@Component({
  selector: 'app-admin-employee-transaction-report',
  templateUrl: './admin-employee-transaction-report.page.html',
  styleUrls: ['./admin-employee-transaction-report.page.scss'],
  imports: [IonPopover, IonCard, IonSelectOption,IonSelect,IonSearchbar, IonGrid, IonRow, IonCol, IonTitle, IonHeader, IonFabButton, IonFab, IonItem, IonListHeader, IonList, IonButton, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar] 

  
})
export class AdminEmployeeTransactionReportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBackHome() {
    this.router.navigate(['/admin-balance-management']);
  }

  goToDetailedTransaction() {
    this.router.navigate(['/admin-employee-detailed-transaction']);
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
