import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminInstantSendPageRoutingModule } from './admin-instant-send-routing.module';

import { AdminInstantSendPage } from './admin-instant-send.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminInstantSendPageRoutingModule,
    AdminInstantSendPage
  ],
  declarations: []
})
export class AdminInstantSendPageModule {}
