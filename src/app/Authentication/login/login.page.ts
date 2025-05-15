import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import {
  ToastController, LoadingController
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    HttpClientModule, FormsModule
]
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  constructor(
    private userService: AuthService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private oneSignal: OneSignal
  ) {}

  ngOnInit() {}

  // Email validation function
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  // Password validation function
  isValidPassword(password: string): boolean {
    return password.length >= 8;
  }

async login() {
  if (!this.isValidEmail(this.email)) {
    const toast = await this.toastController.create({
      message: 'Invalid email format.',
      duration: 2000,
      color: 'danger'
    });
    return toast.present();
  }

  const credentials = {
    email: this.email,
    password: this.password
  };

  const loading = await this.loadingController.create({
    message: 'Logging in...',
    spinner: 'crescent'
  });
  await loading.present();

  this.userService.login(credentials).subscribe({
    next: async (res) => {
      console.log('✅ Login response:', res);

      const user = {
        id: res.id,
        firstName: res.firstName,
        lastName: res.lastName,
        role: res.role,
        email: res.email,
        userNumber: res.userNumber,
        companyId: res.companyId
      };
      this.userService.setUser(user);

      localStorage.setItem('token', res.token);
      localStorage.setItem('refreshToken', res.refreshToken);
      localStorage.setItem('user', JSON.stringify(user));

      try {
        this.oneSignal.setExternalUserId(res.id);
        console.log('🟢 OneSignal external user ID set:', res.id);

        // 🔔 Prompt for notification permission right after setting user ID
        const accepted = await this.oneSignal.promptForPushNotificationsWithUserResponse();
        console.log('🔔 Notification permission accepted:', accepted);
      } catch (err) {
        console.log('🔴 Failed to set OneSignal external user ID or prompt permission:', err);
      }

      const toast = await this.toastController.create({
        message: `Welcome back, ${user.firstName}!`,
        duration: 2000,
        color: 'success'
      });
      toast.present();

      this.router.navigate(['/admin-home']);
      loading.dismiss();
    },
    error: async (err) => {
      console.error('❌ Login error:', err.error || err.message || JSON.stringify(err));

      const toast = await this.toastController.create({
        message: 'Login failed. Please try again.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      loading.dismiss();
    }
  });
}


  goToRegisterOption() {
    this.router.navigate(['/register-option']);
  }
}
