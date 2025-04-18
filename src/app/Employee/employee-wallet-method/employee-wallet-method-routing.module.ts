import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeWalletMethodPage } from './employee-wallet-method.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeWalletMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeWalletMethodPageRoutingModule {}
