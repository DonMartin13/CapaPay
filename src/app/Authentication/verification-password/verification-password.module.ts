import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPasswordPageRoutingModule } from './verification-password-routing.module';

import { VerificationPasswordPage } from './verification-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationPasswordPageRoutingModule,
    VerificationPasswordPage
  ],
  declarations: []
})
export class VerificationPasswordPageModule {}
