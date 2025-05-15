import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminQrGeneratorPage } from './admin-qr-generator.page';

const routes: Routes = [
  {
    path: '',
    component: AdminQrGeneratorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminQrGeneratorPageRoutingModule {}
