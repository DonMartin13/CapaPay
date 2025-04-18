import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminEmployeeManagementPage } from './admin-employee-management.page';

const routes: Routes = [
  {
    path: '',
    component: AdminEmployeeManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEmployeeManagementPageRoutingModule {}
