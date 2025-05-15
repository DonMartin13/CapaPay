import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminScannerPageRoutingModule } from './admin-scanner-routing.module';

import { AdminScannerPage } from './admin-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminScannerPageRoutingModule,
    AdminScannerPage
  ],
  declarations: []
})
export class AdminScannerPageModule {}
