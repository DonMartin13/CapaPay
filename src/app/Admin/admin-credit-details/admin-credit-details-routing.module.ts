import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCreditDetailsPage } from './admin-credit-details.page';

const routes: Routes = [
  {
    path: '',
    component: AdminCreditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminCreditDetailsPageRoutingModule {}
