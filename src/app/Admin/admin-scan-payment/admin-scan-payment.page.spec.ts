import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminScanPaymentPage } from './admin-scan-payment.page';

describe('AdminScanPaymentPage', () => {
  let component: AdminScanPaymentPage;
  let fixture: ComponentFixture<AdminScanPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminScanPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
