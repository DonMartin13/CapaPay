import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeCreditDetailsPageRoutingModule } from './employee-credit-details-routing.module';

import { EmployeeCreditDetailsPage } from './employee-credit-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeCreditDetailsPageRoutingModule,
    EmployeeCreditDetailsPage
  ],
  declarations: []
})
export class EmployeeCreditDetailsPageModule {}
