import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KioskReceiptPageRoutingModule } from './kiosk-receipt-routing.module';

import { KioskReceiptPage } from './kiosk-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KioskReceiptPageRoutingModule,
    KioskReceiptPage
  ],
  declarations: []
})
export class KioskReceiptPageModule {}
