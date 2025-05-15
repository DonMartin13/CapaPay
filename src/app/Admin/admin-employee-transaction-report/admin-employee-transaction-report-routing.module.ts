import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEmployeeTransactionReportPage } from './admin-employee-transaction-report.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEmployeeTransactionReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEmployeeTransactionReportPageRoutingModule {}
