import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskNotificationPage } from './kiosk-notification.page';

const routes: Routes = [
  {
    path: '',
    component: KioskNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskNotificationPageRoutingModule {}
