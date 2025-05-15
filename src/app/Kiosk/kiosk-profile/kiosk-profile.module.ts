import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KioskProfilePageRoutingModule } from './kiosk-profile-routing.module';

import { KioskProfilePage } from './kiosk-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KioskProfilePageRoutingModule,
    KioskProfilePage
  ],
  declarations: []
})
export class KioskProfilePageModule {}
