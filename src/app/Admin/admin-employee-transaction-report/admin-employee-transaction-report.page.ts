import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelectOption, IonSelect, IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar, IonCard, IonPopover } from "@ionic/angular/standalone";
import { ReportService } from 'src/app/services/report.service';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-employee-transaction-report',
  templateUrl: './admin-employee-transaction-report.page.html',
  styleUrls: ['./admin-employee-transaction-report.page.scss'],
  imports: [CommonModule, IonSearchbar, IonGrid, IonRow, IonCol, IonItem, IonList, IonButton, IonApp, IonIcon, IonContent, IonPopover, StatusBarComponent]
})
export class AdminEmployeeTransactionReportPage implements OnInit {

  usersWithBalance: any[] = [];
  searchText: string = '';

  constructor(
    private router: Router,
    private reportService: ReportService
  ) {}

  ngOnInit() {
    this.fetchUsersWithBalance();
  }

  ionViewWillEnter() {
    this.fetchUsersWithBalance();
  }

  fetchUsersWithBalance() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      const companyId = user.companyId;
      this.reportService.getUsersWithBalance(companyId).subscribe({
        next: (res) => {
          this.usersWithBalance = res;
          console.log('Users with balance:', res);
        },
        error: (err) => {
          console.error('Failed to fetch users with balance:', err);
        }
      });
    } else {
      console.error('No user found in localStorage.');
    }
  }

  goBackHome() {
    this.router.navigate(['/admin-balance-management']);
  }

  goToDetailedTransaction(userId: string) {
    console.log('Navigating to details for userId:', userId);
    this.router.navigate(['/admin-employee-detailed-transaction', userId]);
  }

  onSearchChange(event: any) {
    console.log('Searching for:', this.searchText);
  }

  onFilterSelect(option: string) {
    if (option === 'Employee') {
      this.router.navigate(['/admin-employee-transaction-report']);
    } else if (option === 'Kiosk') {
      this.router.navigate(['/admin-kiosk-transaction-report']);
    }
  }
}
