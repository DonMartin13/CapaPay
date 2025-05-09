import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminScanPaymentPageRoutingModule } from './admin-scan-payment-routing.module';

import { AdminScanPaymentPage } from './admin-scan-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminScanPaymentPageRoutingModule,
    AdminScanPaymentPage
  ],
  declarations: []
})
export class AdminScanPaymentPageModule {}
