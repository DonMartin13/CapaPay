import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KioskScannerPage } from './kiosk-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: KioskScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KioskScannerPageRoutingModule {}
