import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminKioskTransactionReportPage } from './admin-kiosk-transaction-report.page';

describe('AdminKioskTransactionReportPage', () => {
  let component: AdminKioskTransactionReportPage;
  let fixture: ComponentFixture<AdminKioskTransactionReportPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKioskTransactionReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
