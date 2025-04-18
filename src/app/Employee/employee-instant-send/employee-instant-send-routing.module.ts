import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeInstantSendPage } from './employee-instant-send.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeInstantSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeInstantSendPageRoutingModule {}
