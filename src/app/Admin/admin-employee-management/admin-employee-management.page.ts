import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonGrid, IonSearchbar, IonPopover, IonBadge } from "@ionic/angular/standalone";
import { CompanyService } from 'src/app/services/company.service';
import { CommonModule } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";


@Component({
  selector: 'app-admin-employee-management',
  templateUrl: './admin-employee-management.page.html',
  styleUrls: ['./admin-employee-management.page.scss'],
  imports: [CommonModule, IonPopover, IonSearchbar, IonGrid, IonRow, IonCol, IonItem, IonList, IonButton, IonApp, IonIcon, IonContent, StatusBarComponent] 

})
export class AdminEmployeeManagementPage implements OnInit {
  requestList: any[] = [];
  employeeRequests: any[] = [];
  kioskRequests: any[] = [];

  constructor(
    private router: Router,
    private companyService: CompanyService,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadRequest();
  }
  ionViewWillEnter() {
    this.loadRequest();
  }

  goBackHome() {
    this.router.navigate(['/admin-balance-management']);
  }
  loadRequest() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      const companyId = user.companyId;
      this.companyService.getRequests(companyId).subscribe({
        next: (res) => {
          this.requestList = res;
          this.employeeRequests = res.filter((r: any) => r.role === 'employee');
          this.kioskRequests = res.filter((r: any) => r.role === 'kiosk');
          console.log('Employee Requests:', this.employeeRequests);
          console.log('Kiosk Requests:', this.kioskRequests);
        },
        error: (err) => {
          console.error('Failed to fetch users with balance:', err);
        }
      });
    } else {
      console.error('No user found in localStorage.');
    }
  }  
  
  searchText: string = '';

  onSearchChange(event: any) {
    console.log('Searching for:', this.searchText);
  }
  
  onFilterSelect(option: string) {
    console.log('Filter selected:', option);
  }

  approveUser(userId: string) {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      const data = {
        userId: userId,
        companyId: user.companyId,
        status: 'approved'
      };
      this.companyService.processJoinRequest(data).subscribe({
        next: (res) => {
          console.log('User approved:', res);
          this.showToast('User approved successfully!', 'success');
          this.loadRequest();
        },
        error: (err) => {
          console.error('Approval failed:', err);
          this.showToast('Failed to approve user.', 'danger');
        }
      });
    }
  }
  async confirmAction(action: 'approve' | 'reject', userId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: `Are you sure you want to ${action} this user?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            if (action === 'approve') {
              this.approveUser(userId);
            } else {
              this.rejectUser(userId);
            }
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  
  rejectUser(userId: string) {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      const data = {
        userId: userId,
        companyId: user.companyId,
        status: 'rejected'
      };
      this.companyService.processJoinRequest(data).subscribe({
        next: (res) => {
          console.log('User rejected:', res);
          this.showToast('User rejected.', 'danger');
          this.loadRequest();
        },
        error: (err) => {
          console.error('Rejection failed:', err);
          this.showToast('Failed to reject user.', 'danger');
        }
      });
    }
  }
  
  async showToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    toast.present();
  }
  
}
