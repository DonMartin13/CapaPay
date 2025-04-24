import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreditDetailsPage } from './employee-credit-details.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeCreditDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeCreditDetailsPageRoutingModule {}
