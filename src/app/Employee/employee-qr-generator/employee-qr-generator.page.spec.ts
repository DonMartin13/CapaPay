import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeQrGeneratorPage } from './employee-qr-generator.page';

describe('EmployeeQrGeneratorPage', () => {
  let component: EmployeeQrGeneratorPage;
  let fixture: ComponentFixture<EmployeeQrGeneratorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeQrGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
