import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KioskTransactionHistoryPageRoutingModule } from './kiosk-transaction-history-routing.module';

import { KioskTransactionHistoryPage } from './kiosk-transaction-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KioskTransactionHistoryPageRoutingModule,
    KioskTransactionHistoryPage
  ],
  declarations: []
})
export class KioskTransactionHistoryPageModule {}
