import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskDetailsPage } from './kiosk-details.page';

const routes: Routes = [
  {
    path: '',
    component: KioskDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskDetailsPageRoutingModule {}
