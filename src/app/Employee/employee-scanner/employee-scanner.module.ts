import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeScannerPageRoutingModule } from './employee-scanner-routing.module';

import { EmployeeScannerPage } from './employee-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeScannerPageRoutingModule,
    EmployeeScannerPage
  ],
  declarations: []
})
export class EmployeeScannerPageModule {}
