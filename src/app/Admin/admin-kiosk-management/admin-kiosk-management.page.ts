import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar, IonPopover } from "@ionic/angular/standalone";
import { KioskService } from 'src/app/services/kiosk.service';
import { CommonModule } from '@angular/common';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";

@Component({
  selector: 'app-admin-kiosk-management',
  templateUrl: './admin-kiosk-management.page.html',
  styleUrls: ['./admin-kiosk-management.page.scss'],
  imports: [CommonModule, IonPopover, IonSearchbar, IonGrid, IonRow, IonCol, IonItem, IonList, IonButton, IonApp, IonIcon, IonContent, StatusBarComponent] 
})
export class AdminKioskManagementPage implements OnInit {

  kioskList: any[] = [];

  constructor(
    private router: Router,
    private kioskService: KioskService
  ) {}

  ngOnInit() {
    this.loadKiosks();
  }

  ionViewWillEnter() {
    this.loadKiosks();
  }

  loadKiosks() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      const companyId = user.companyId;
      this.kioskService.getKiosksByCompanyId(companyId).subscribe({
        next: (res) => {
          this.kioskList = res;
          console.log('Kiosk List:', res);
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

  searchText: string = '';

  onSearchChange(event: any) {
    console.log('Searching for:', this.searchText);
  }

  onFilterSelect(option: string) {
    console.log('Filter selected:', option);
  }
  onSelect(action: string, kioskId: string) {
    const newStatus = action === 'Activate';
  
    this.kioskService.updateKiosk(kioskId, { status: newStatus }).subscribe({
      next: () => {
        console.log(`Kiosk ${action}d successfully.`);
        this.loadKiosks(); // Refresh the kiosk list
      },
      error: (err) => {
        console.error(`Failed to ${action.toLowerCase()} kiosk:`, err);
      }
    });
  }  

  approveUser() {}

  rejectUser() {}

  openPopover(ev: Event, triggerId: string) {
    // Optional: any logic before opening
  }

  editUser() {}

  deleteUser() {}

}
