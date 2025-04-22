import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminKioskDetailedTransactionPage } from './admin-kiosk-detailed-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: AdminKioskDetailedTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminKioskDetailedTransactionPageRoutingModule {}
