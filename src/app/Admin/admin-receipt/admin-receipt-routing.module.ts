import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminReceiptPage } from './admin-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: AdminReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminReceiptPageRoutingModule {}
