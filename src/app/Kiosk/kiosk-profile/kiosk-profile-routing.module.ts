import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskProfilePage } from './kiosk-profile.page';

const routes: Routes = [
  {
    path: '',
    component: KioskProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskProfilePageRoutingModule {}
