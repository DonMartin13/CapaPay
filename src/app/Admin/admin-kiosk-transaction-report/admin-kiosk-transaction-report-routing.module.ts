import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminKioskTransactionReportPage } from './admin-kiosk-transaction-report.page';

const routes: Routes = [
  {
    path: '',
    component: AdminKioskTransactionReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminKioskTransactionReportPageRoutingModule {}
