import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePaymentConfirmationPage } from './employee-payment-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeePaymentConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePaymentConfirmationPageRoutingModule {}
