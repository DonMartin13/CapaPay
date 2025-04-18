import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeInstantSendPageRoutingModule } from './employee-instant-send-routing.module';

import { EmployeeInstantSendPage } from './employee-instant-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeInstantSendPageRoutingModule,
    EmployeeInstantSendPage
  ],
  declarations: []
})
export class EmployeeInstantSendPageModule {}
