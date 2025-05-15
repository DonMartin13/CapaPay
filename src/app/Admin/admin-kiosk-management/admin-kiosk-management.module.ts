import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminKioskManagementPageRoutingModule } from './admin-kiosk-management-routing.module';

import { AdminKioskManagementPage } from './admin-kiosk-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminKioskManagementPageRoutingModule,
    AdminKioskManagementPage
  ],
  declarations: []
})
export class AdminKioskManagementPageModule {}
