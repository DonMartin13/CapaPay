import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminInstantSendPage } from './admin-instant-send.page';

const routes: Routes = [
  {
    path: '',
    component: AdminInstantSendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminInstantSendPageRoutingModule {}
