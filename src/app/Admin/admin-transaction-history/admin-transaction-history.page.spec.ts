import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTransactionHistoryPage } from './admin-transaction-history.page';

describe('AdminTransactionHistoryPage', () => {
  let component: AdminTransactionHistoryPage;
  let fixture: ComponentFixture<AdminTransactionHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransactionHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
