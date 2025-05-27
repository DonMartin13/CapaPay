import { Component, OnInit } from '@angular/core';
import { IonCard } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid,IonSelect, IonSelectOption } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CompanyService } from 'src/app/services/company.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.page.html',
  styleUrls: ['./company-details.page.scss'],
  imports: [FormsModule, IonInput, IonItem, IonButton,IonLabel,IonSelectOption]

})
export class CompanyDetailsPage implements OnInit {
  companyName: string = '';
  natureOfBusiness: string = '';
  newUser: any;

  constructor(
    private router: Router,
    private userService: AuthService,
    private companyService: CompanyService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['newUser']) {
      this.newUser = nav.extras.state['newUser'];
    }
  }

  ngOnInit() {}

  onBusinessChange(event: any) {
    this.natureOfBusiness = event.detail.value;
    console.log('Selected business:', this.natureOfBusiness);
  }

  async registerCompany() {
    if (!this.companyName || !this.natureOfBusiness || !this.newUser) {
      const toast = await this.toastController.create({
        message: 'Please fill in all company details.',
        duration: 2000,
        color: 'danger'
      });
      return toast.present();
    }

    const loading = await this.loadingController.create({
      message: 'Completing registration...',
      spinner: 'crescent'
    });
    await loading.present();

    const companyData = {
      companyName: this.companyName,
      businessCategory: this.natureOfBusiness
    };

    this.companyService.createCompany(companyData).subscribe({
      next: async (companyRes) => {
        const companyId = companyRes?.id || companyRes?.companyId;
        if (!companyId) {
          await loading.dismiss();
          const toast = await this.toastController.create({
            message: 'Failed to create company.',
            duration: 2000,
            color: 'danger'
          });
          return toast.present();
        }

        this.newUser.companyId = companyId;

        this.userService.register(this.newUser).subscribe({
          next: async () => {
            await loading.dismiss();
            const toast = await this.toastController.create({
              message: 'Registration successful!',
              duration: 2000,
              color: 'success'
            });
            toast.present();
            this.router.navigate(['/login']);
          },
          error: async () => {
            await loading.dismiss();
            const toast = await this.toastController.create({
              message: 'Registration failed. Try again.',
              duration: 2000,
              color: 'danger'
            });
            toast.present();
          }
        });
      },
      error: async () => {
        await loading.dismiss();
        const toast = await this.toastController.create({
          message: 'Company creation failed.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
