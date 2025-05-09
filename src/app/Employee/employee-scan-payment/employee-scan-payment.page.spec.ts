import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeScanPaymentPage } from './employee-scan-payment.page';

describe('EmployeeScanPaymentPage', () => {
  let component: EmployeeScanPaymentPage;
  let fixture: ComponentFixture<EmployeeScanPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeScanPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
