import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeNotificationPage } from './employee-notification.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeNotificationPageRoutingModule {}
