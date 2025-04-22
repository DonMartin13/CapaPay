import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminScannerPage } from './admin-scanner.page';

describe('AdminScannerPage', () => {
  let component: AdminScannerPage;
  let fixture: ComponentFixture<AdminScannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
