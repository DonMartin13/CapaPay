import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPaymentConfirmationPage } from './admin-payment-confirmation.page';

describe('AdminPaymentConfirmationPage', () => {
  let component: AdminPaymentConfirmationPage;
  let fixture: ComponentFixture<AdminPaymentConfirmationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPaymentConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
