import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminWalletMethodPageRoutingModule } from './admin-wallet-method-routing.module';

import { AdminWalletMethodPage } from './admin-wallet-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminWalletMethodPageRoutingModule,
    AdminWalletMethodPage
  ],
  declarations: []
})
export class AdminWalletMethodPageModule {}
