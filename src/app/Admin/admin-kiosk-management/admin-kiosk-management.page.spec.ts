import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminKioskManagementPage } from './admin-kiosk-management.page';

describe('AdminKioskManagementPage', () => {
  let component: AdminKioskManagementPage;
  let fixture: ComponentFixture<AdminKioskManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKioskManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
