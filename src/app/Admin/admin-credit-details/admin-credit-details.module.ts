import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminCreditDetailsPageRoutingModule } from './admin-credit-details-routing.module';

import { AdminCreditDetailsPage } from './admin-credit-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminCreditDetailsPageRoutingModule,
    AdminCreditDetailsPage
  ],
  declarations: []
})
export class AdminCreditDetailsPageModule {}
