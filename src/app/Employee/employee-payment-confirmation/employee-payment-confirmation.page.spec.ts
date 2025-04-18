import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeePaymentConfirmationPage } from './employee-payment-confirmation.page';

describe('EmployeePaymentConfirmationPage', () => {
  let component: EmployeePaymentConfirmationPage;
  let fixture: ComponentFixture<EmployeePaymentConfirmationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePaymentConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
