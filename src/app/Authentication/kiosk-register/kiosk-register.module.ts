import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KioskRegisterPageRoutingModule } from './kiosk-register-routing.module';

import { KioskRegisterPage } from './kiosk-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KioskRegisterPageRoutingModule,
    KioskRegisterPage
  ],
  declarations: []
})
export class KioskRegisterPageModule {}
