import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeQrGeneratorPage } from './employee-qr-generator.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeQrGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeQrGeneratorPageRoutingModule {}
