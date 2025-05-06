import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPaymentConfirmationPageRoutingModule } from './admin-payment-confirmation-routing.module';

import { AdminPaymentConfirmationPage } from './admin-payment-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPaymentConfirmationPageRoutingModule,
    AdminPaymentConfirmationPage
  ],
  declarations: []
})
export class AdminPaymentConfirmationPageModule {}
