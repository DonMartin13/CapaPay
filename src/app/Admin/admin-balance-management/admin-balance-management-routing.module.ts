import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBalanceManagementPage } from './admin-balance-management.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBalanceManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminBalanceManagementPageRoutingModule {}
