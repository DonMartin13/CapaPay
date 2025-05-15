import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeQrGeneratorPageRoutingModule } from './employee-qr-generator-routing.module';

import { EmployeeQrGeneratorPage } from './employee-qr-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeQrGeneratorPageRoutingModule,
    EmployeeQrGeneratorPage
  ],
  declarations: []
})
export class EmployeeQrGeneratorPageModule {}
