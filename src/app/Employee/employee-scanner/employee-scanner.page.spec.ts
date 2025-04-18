import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeScannerPage } from './employee-scanner.page';

describe('EmployeeScannerPage', () => {
  let component: EmployeeScannerPage;
  let fixture: ComponentFixture<EmployeeScannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
