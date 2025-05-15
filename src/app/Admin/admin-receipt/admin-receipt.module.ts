import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminReceiptPageRoutingModule } from './admin-receipt-routing.module';

import { AdminReceiptPage } from './admin-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminReceiptPageRoutingModule,
    AdminReceiptPage
  ],
  declarations: []
})
export class AdminReceiptPageModule {}
