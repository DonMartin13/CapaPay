import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskHomePage } from './kiosk-home.page';

const routes: Routes = [
  {
    path: '',
    component: KioskHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskHomePageRoutingModule {}
