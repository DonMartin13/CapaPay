import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTransactionHistoryPage } from './admin-transaction-history.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTransactionHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTransactionHistoryPageRoutingModule {}
