import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminKioskTransactionReportPageRoutingModule } from './admin-kiosk-transaction-report-routing.module';

import { AdminKioskTransactionReportPage } from './admin-kiosk-transaction-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminKioskTransactionReportPageRoutingModule,
    AdminKioskTransactionReportPage
  ],
  declarations: []
})
export class AdminKioskTransactionReportPageModule {}
