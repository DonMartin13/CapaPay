import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeCreditDetailsPage } from './employee-credit-details.page';

describe('EmployeeCreditDetailsPage', () => {
  let component: EmployeeCreditDetailsPage;
  let fixture: ComponentFixture<EmployeeCreditDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeCreditDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
