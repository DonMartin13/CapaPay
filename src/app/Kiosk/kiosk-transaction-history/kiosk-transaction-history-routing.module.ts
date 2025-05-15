import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskTransactionHistoryPage } from './kiosk-transaction-history.page';

const routes: Routes = [
  {
    path: '',
    component: KioskTransactionHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskTransactionHistoryPageRoutingModule {}
