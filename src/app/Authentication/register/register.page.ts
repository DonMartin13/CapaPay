import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {
  ToastController, LoadingController, IonContent, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, 
    HttpClientModule, FormsModule
]
})
export class RegisterPage implements OnInit {

  role: string = 'employee';
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private userService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['role']) {
      this.role = nav.extras.state['role'];
    }
  }

  ngOnInit() {}

  
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Password validation function
  isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

  async register() {
    if (!this.isValidEmail(this.email)) {
      const toast = await this.toastController.create({
        message: 'Invalid email format.',
        duration: 2000,
        color: 'danger'
      });
      return toast.present();
    }

    if (!this.isValidPassword(this.password)) {
      const toast = await this.toastController.create({
        message: 'Password must be at least 8 characters long.',
        duration: 2000,
        color: 'danger'
      });
      return toast.present();
    }

    if (this.password !== this.confirmPassword) {
      const toast = await this.toastController.create({
        message: 'Passwords do not match.',
        duration: 2000,
        color: 'danger'
      });
      return toast.present();
    }
  
    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role,
      password: this.password
    };

    if (this.role === 'admin') {
      this.router.navigate(['/company-details'], {
        state: { newUser }
      });
      return;
    }
    if (this.role === 'kiosk') {
      this.router.navigate(['/kiosk-details'], {
        state: { newUser }
      });
      return;
    }
    
    const loading = await this.loadingController.create({
      message: 'Registering...',
      spinner: 'crescent'
    });
    await loading.present();
  
    this.userService.register(newUser).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Registration successful!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
  
        this.router.navigate(['/login']);
        loading.dismiss();
      },
      error: async () => {
        const toast = await this.toastController.create({
          message: 'Registration failed. Try again.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
        loading.dismiss();
      }
    });
  }  

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
