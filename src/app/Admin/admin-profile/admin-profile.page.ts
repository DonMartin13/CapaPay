import { Component, OnInit } from '@angular/core';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonAvatar, IonInput } from "@ionic/angular/standalone";
import { AdminNavbarComponent } from '../../Components/admin-navbar/admin-navbar.component';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { EmployeeNavbarComponent } from "../../Components/employee-navbar/employee-navbar.component";
import { StatusBarComponent } from "../../Components/status-bar/status-bar.component";
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.page.html',
  styleUrls: ['./admin-profile.page.scss'],
  imports: [CommonModule, IonAvatar, AdminNavbarComponent, IonApp, IonIcon, IonContent, EmployeeNavbarComponent, StatusBarComponent] 

})
export class AdminProfilePage implements OnInit {

  company: any;
  user: any;
  constructor(
    private router: Router,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);

      const companyId = this.user.companyId;
      if (companyId) {
        this.companyService.getCompanyById(companyId).subscribe({
          next: (res) => {
            this.company = res;
          },
          error: (err) => {
            console.error('❌ Failed to fetch company info:', err);
          }
        });
      }
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
