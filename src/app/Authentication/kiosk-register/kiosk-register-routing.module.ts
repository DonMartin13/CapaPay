import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskRegisterPage } from './kiosk-register.page';

const routes: Routes = [
  {
    path: '',
    component: KioskRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskRegisterPageRoutingModule {}
