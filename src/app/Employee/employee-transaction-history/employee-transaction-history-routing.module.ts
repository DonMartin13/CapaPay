import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeTransactionHistoryPage } from './employee-transaction-history.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeTransactionHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeTransactionHistoryPageRoutingModule {}
