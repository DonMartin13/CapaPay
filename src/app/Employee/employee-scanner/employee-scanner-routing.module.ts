import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeScannerPage } from './employee-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeScannerPageRoutingModule {}
