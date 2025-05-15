import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private notificationService: NotificationService
  ) {
    this.initializeApp();
  }
    initializeApp() {
    this.platform.ready().then(() => {
      this.notificationService.initOneSignal();
    });
  }
}
