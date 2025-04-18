import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeePaymentConfirmationPageRoutingModule } from './employee-payment-confirmation-routing.module';

import { EmployeePaymentConfirmationPage } from './employee-payment-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeePaymentConfirmationPageRoutingModule,
    EmployeePaymentConfirmationPage
  ],
  declarations: []
})
export class EmployeePaymentConfirmationPageModule {}
