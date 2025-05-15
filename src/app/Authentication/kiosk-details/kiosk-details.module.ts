import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KioskDetailsPageRoutingModule } from './kiosk-details-routing.module';

import { KioskDetailsPage } from './kiosk-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KioskDetailsPageRoutingModule
  ],
  declarations: []
})
export class KioskDetailsPageModule {}
