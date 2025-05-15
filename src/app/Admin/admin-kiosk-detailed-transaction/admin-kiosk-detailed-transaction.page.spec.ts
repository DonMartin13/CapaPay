import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminKioskDetailedTransactionPage } from './admin-kiosk-detailed-transaction.page';

describe('AdminKioskDetailedTransactionPage', () => {
  let component: AdminKioskDetailedTransactionPage;
  let fixture: ComponentFixture<AdminKioskDetailedTransactionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKioskDetailedTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
