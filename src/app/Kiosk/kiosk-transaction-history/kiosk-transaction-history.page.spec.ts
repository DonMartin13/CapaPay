import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KioskTransactionHistoryPage } from './kiosk-transaction-history.page';

describe('KioskTransactionHistoryPage', () => {
  let component: KioskTransactionHistoryPage;
  let fixture: ComponentFixture<KioskTransactionHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskTransactionHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
