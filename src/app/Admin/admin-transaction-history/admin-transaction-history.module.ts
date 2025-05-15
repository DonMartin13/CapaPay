import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTransactionHistoryPageRoutingModule } from './admin-transaction-history-routing.module';

import { AdminTransactionHistoryPage } from './admin-transaction-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTransactionHistoryPageRoutingModule,
    AdminTransactionHistoryPage
  ],
  declarations: []
})
export class AdminTransactionHistoryPageModule {}
