import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeScanPaymentPage } from './employee-scan-payment.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeScanPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeScanPaymentPageRoutingModule {}
