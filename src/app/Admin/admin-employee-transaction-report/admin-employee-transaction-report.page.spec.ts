import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEmployeeTransactionReportPage } from './admin-employee-transaction-report.page';

describe('AdminEmployeeTransactionReportPage', () => {
  let component: AdminEmployeeTransactionReportPage;
  let fixture: ComponentFixture<AdminEmployeeTransactionReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeTransactionReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
