import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminWalletMethodPage } from './admin-wallet-method.page';

const routes: Routes = [
  {
    path: '',
    component: AdminWalletMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminWalletMethodPageRoutingModule {}
