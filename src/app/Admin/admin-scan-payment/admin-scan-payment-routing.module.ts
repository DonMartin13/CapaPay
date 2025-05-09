import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminScanPaymentPage } from './admin-scan-payment.page';

const routes: Routes = [
  {
    path: '',
    component: AdminScanPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminScanPaymentPageRoutingModule {}
