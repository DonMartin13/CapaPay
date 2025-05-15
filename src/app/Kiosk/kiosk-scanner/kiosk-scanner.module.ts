import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KioskScannerPageRoutingModule } from './kiosk-scanner-routing.module';

import { KioskScannerPage } from './kiosk-scanner.page';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KioskScannerPageRoutingModule,
    KioskScannerPage,
    ZXingScannerModule
  ],
  declarations: []
})
export class KioskScannerPageModule {}
