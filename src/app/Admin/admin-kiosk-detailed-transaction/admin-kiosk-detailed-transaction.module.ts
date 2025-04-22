import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminKioskDetailedTransactionPageRoutingModule } from './admin-kiosk-detailed-transaction-routing.module';

import { AdminKioskDetailedTransactionPage } from './admin-kiosk-detailed-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminKioskDetailedTransactionPageRoutingModule,
    AdminKioskDetailedTransactionPage
  ],
  declarations: []
})
export class AdminKioskDetailedTransactionPageModule {}
