import { Component, OnInit } from '@angular/core';
import { IonCard } from '@ionic/angular';
import { IonApp, IonIcon, IonTabButton, IonLabel, IonFooter, IonContent, IonToolbar, IonTabs, IonTabBar, IonButton, IonList, IonListHeader, IonItem, IonFab, IonFabButton, IonHeader, IonTitle, IonCol, IonRow, IonInput, IonGrid,IonSelect, IonSelectOption } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { KioskService } from 'src/app/services/kiosk.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kiosk-details',
  templateUrl: './kiosk-details.page.html',
  styleUrls: ['./kiosk-details.page.scss'],
  imports: [FormsModule, IonInput, IonItem, IonButton, CommonModule]
})
export class KioskDetailsPage implements OnInit {
  kioskName: string = '';
  kioskCategory: string = '';
  newUser: any;
  customCategory: string = '';

  constructor(
    private router: Router,
    private userService: AuthService,
    private kioskService: KioskService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['newUser']) {
      this.newUser = nav.extras.state['newUser'];
    }
  }

  ngOnInit() {}

 async registerKiosk() {
  if (!this.kioskName || !this.kioskCategory || !this.newUser) {
    const toast = await this.toastController.create({
      message: 'Please fill in all kiosk details.',
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

  
  this.userService.register(this.newUser).subscribe({
    next: async (userResponse) => {
      const userId = userResponse?.id || userResponse?.userId;
      if (!userId) {
        await loading.dismiss();
        const toast = await this.toastController.create({
          message: 'Failed to register user.',
          duration: 2000,
          color: 'danger'
        });
        return toast.present();
      }

      const categoryToSend = this.kioskCategory === 'Others' ? this.customCategory : this.kioskCategory;
      const kioskData = {
        kioskName: this.kioskName,
        category: categoryToSend,
        userId: userId,
        status: true
      };

      this.kioskService.createKiosk(kioskData).subscribe({
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
            message: 'Kiosk creation failed.',
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
        message: 'User registration failed.',
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
