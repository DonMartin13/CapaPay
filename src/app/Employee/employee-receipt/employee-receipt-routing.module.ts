import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeReceiptPage } from './employee-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeReceiptPageRoutingModule {}
