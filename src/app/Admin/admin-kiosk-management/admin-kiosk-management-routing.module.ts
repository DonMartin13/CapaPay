import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminKioskManagementPage } from './admin-kiosk-management.page';

const routes: Routes = [
  {
    path: '',
    component: AdminKioskManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminKioskManagementPageRoutingModule {}
