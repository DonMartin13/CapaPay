import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskReceiptPage } from './kiosk-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: KioskReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskReceiptPageRoutingModule {}
