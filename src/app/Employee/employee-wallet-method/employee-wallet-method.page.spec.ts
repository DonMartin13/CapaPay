import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeWalletMethodPage } from './employee-wallet-method.page';

describe('EmployeeWalletMethodPage', () => {
  let component: EmployeeWalletMethodPage;
  let fixture: ComponentFixture<EmployeeWalletMethodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWalletMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
