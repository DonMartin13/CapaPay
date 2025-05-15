import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KioskNotificationPageRoutingModule } from './kiosk-notification-routing.module';

import { KioskNotificationPage } from './kiosk-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KioskNotificationPageRoutingModule,
    KioskNotificationPage
  ],
  declarations: []
})
export class KioskNotificationPageModule {}
