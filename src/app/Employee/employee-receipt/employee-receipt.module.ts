import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeReceiptPageRoutingModule } from './employee-receipt-routing.module';

import { EmployeeReceiptPage } from './employee-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeReceiptPageRoutingModule,
    EmployeeReceiptPage
  ],
  declarations: []
})
export class EmployeeReceiptPageModule {}
