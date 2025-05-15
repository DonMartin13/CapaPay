import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeNotificationPageRoutingModule } from './employee-notification-routing.module';

import { EmployeeNotificationPage } from './employee-notification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeNotificationPageRoutingModule,
    EmployeeNotificationPage
  ],
  declarations: []
})
export class EmployeeNotificationPageModule {}
