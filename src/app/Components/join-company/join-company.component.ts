import { Component, OnInit } from '@angular/core';
import { IonGrid, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonItem, IonInput, IonRow, IonCol, IonButton, IonLabel } from "@ionic/angular/standalone";
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { AlertController } from '@ionic/angular'; // ✅ import AlertController
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-join-company',
  templateUrl: './join-company.component.html',
  styleUrls: ['./join-company.component.scss'],
  imports: [FormsModule, CommonModule, IonButton, IonInput, IonItem, IonCardHeader, IonCardTitle, IonCard, IonCardContent]
})
export class JoinCompanyComponent implements OnInit {
  companyCode: string = '';
  user: any = null;  
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }
  }

  async joinCompany() {
    if (!this.companyCode || this.companyCode.trim() === '') {
      const toast = await this.toastController.create({
        message: 'Enter company code.',
        duration: 3000,
        color: 'warning',
        position: 'bottom',
      });
      await toast.present();
      return;
    }
  
    this.companyService.getCompanyByCode(this.companyCode).subscribe({
      next: async (company) => {
        const alert = await this.alertController.create({
          header: 'Confirm Join',
          message: `Are you sure you want to join:\n${company.companyName} (${company.businessCategory})\nCode: ${company.companyCode}`,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
            },
            {
              text: 'Join',
              handler: async () => {

                const joinData = {
                  userId: this.user.id,
                  companyId: company.id,
                };
  
                this.companyService.joinCompany(joinData).subscribe({
                  next: async (response) => {
                    const toast = await this.toastController.create({
                      message: response.message,
                      duration: 3000,
                      color: 'success',
                      position: 'bottom',
                    });
                    await toast.present();
                  },
                  error: async (err) => {
                    console.error('Join company failed:', err);
                    const errorMessage = err.error?.message || 'An error occurred, please try again.';
                    const errorToast = await this.toastController.create({
                      message: errorMessage,
                      duration: 3000,
                      color: 'danger',
                      position: 'bottom',
                    });
                    await errorToast.present();
                  }
                });
              },
            },
          ],
        });
  
        await alert.present();
      },
      error: async () => {
        const toast = await this.toastController.create({
          message: 'Company not found or invalid code.',
          duration: 3000,
          color: 'danger',
          position: 'bottom',
        });
        await toast.present();
      },
    });
  }
  
  
}
