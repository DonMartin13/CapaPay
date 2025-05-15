import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminBalanceManagementPageRoutingModule } from './admin-balance-management-routing.module';

import { AdminBalanceManagementPage } from './admin-balance-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminBalanceManagementPageRoutingModule,
    AdminBalanceManagementPage
  ],
  declarations: []
})
export class AdminBalanceManagementPageModule {}
