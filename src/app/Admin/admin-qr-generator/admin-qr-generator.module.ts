import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminQrGeneratorPageRoutingModule } from './admin-qr-generator-routing.module';

import { AdminQrGeneratorPage } from './admin-qr-generator.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminQrGeneratorPageRoutingModule,
    AdminQrGeneratorPage,
  ],
  declarations: []
})
export class AdminQrGeneratorPageModule {}
