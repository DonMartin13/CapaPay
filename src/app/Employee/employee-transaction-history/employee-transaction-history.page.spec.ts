import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeTransactionHistoryPage } from './employee-transaction-history.page';

describe('EmployeeTransactionHistoryPage', () => {
  let component: EmployeeTransactionHistoryPage;
  let fixture: ComponentFixture<EmployeeTransactionHistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTransactionHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
