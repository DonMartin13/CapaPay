import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeTransactionHistoryPageRoutingModule } from './employee-transaction-history-routing.module';

import { EmployeeTransactionHistoryPage } from './employee-transaction-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeTransactionHistoryPageRoutingModule,
    EmployeeTransactionHistoryPage
  ],
  declarations: []
})
export class EmployeeTransactionHistoryPageModule {}
