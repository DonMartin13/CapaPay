import { NgModule } from '@angular/core';
import { EmployeeNavbarComponent } from '../Components/employee-navbar/employee-navbar.component';
import { AdminNavbarComponent } from '../Components/admin-navbar/admin-navbar.component';
import { KioskNavbarComponent } from '../Components/kiosk-navbar/kiosk-navbar.component';

@NgModule({
  imports: [
    EmployeeNavbarComponent,
    AdminNavbarComponent,
    KioskNavbarComponent
  ],  // Import here
  exports: [
    EmployeeNavbarComponent,
    AdminNavbarComponent,
    KioskNavbarComponent
  ],  // Export it for reuse
})
export class SharedModule {}
