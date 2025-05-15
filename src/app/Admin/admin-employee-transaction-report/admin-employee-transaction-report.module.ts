import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEmployeeTransactionReportPageRoutingModule } from './admin-employee-transaction-report-routing.module';

import { AdminEmployeeTransactionReportPage } from './admin-employee-transaction-report.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEmployeeTransactionReportPageRoutingModule,
    AdminEmployeeTransactionReportPage
  ],
  declarations: []
})
export class AdminEmployeeTransactionReportPageModule {}
