import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeReceiptPage } from './employee-receipt.page';

describe('EmployeeReceiptPage', () => {
  let component: EmployeeReceiptPage;
  let fixture: ComponentFixture<EmployeeReceiptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
