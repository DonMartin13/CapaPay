import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminScannerPage } from './admin-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: AdminScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminScannerPageRoutingModule {}
