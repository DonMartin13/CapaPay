import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEmployeeDetailedTransactionPageRoutingModule } from './admin-employee-detailed-transaction-routing.module';

import { AdminEmployeeDetailedTransactionPage } from './admin-employee-detailed-transaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEmployeeDetailedTransactionPageRoutingModule,
    AdminEmployeeDetailedTransactionPage
  ],
  declarations: []
})
export class AdminEmployeeDetailedTransactionPageModule {}
