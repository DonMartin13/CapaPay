import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminEmployeeManagementPageRoutingModule } from './admin-employee-management-routing.module';

import { AdminEmployeeManagementPage } from './admin-employee-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminEmployeeManagementPageRoutingModule,
    AdminEmployeeManagementPage
  ],
  declarations: []
})
export class AdminEmployeeManagementPageModule {}
