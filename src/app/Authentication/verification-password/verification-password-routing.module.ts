import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificationPasswordPage } from './verification-password.page';

const routes: Routes = [
  {
    path: '',
    component: VerificationPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationPasswordPageRoutingModule {}
