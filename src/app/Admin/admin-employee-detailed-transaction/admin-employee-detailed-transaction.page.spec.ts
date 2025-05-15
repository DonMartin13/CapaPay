import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEmployeeDetailedTransactionPage } from './admin-employee-detailed-transaction.page';

describe('AdminEmployeeDetailedTransactionPage', () => {
  let component: AdminEmployeeDetailedTransactionPage;
  let fixture: ComponentFixture<AdminEmployeeDetailedTransactionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeDetailedTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
