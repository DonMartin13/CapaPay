import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPaymentConfirmationPage } from './admin-payment-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPaymentConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPaymentConfirmationPageRoutingModule {}
