import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeWalletMethodPageRoutingModule } from './employee-wallet-method-routing.module';

import { EmployeeWalletMethodPage } from './employee-wallet-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeWalletMethodPageRoutingModule,
    EmployeeWalletMethodPage
  ],
  declarations: []
})
export class EmployeeWalletMethodPageModule {}
