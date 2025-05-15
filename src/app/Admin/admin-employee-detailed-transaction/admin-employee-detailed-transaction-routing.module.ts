import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEmployeeDetailedTransactionPage } from './admin-employee-detailed-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEmployeeDetailedTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEmployeeDetailedTransactionPageRoutingModule {}
