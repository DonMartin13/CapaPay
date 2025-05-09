import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeScanPaymentPageRoutingModule } from './employee-scan-payment-routing.module';

import { EmployeeScanPaymentPage } from './employee-scan-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeScanPaymentPageRoutingModule,
    EmployeeScanPaymentPage
  ],
  declarations: []
})
export class EmployeeScanPaymentPageModule {}
