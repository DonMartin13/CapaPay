import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeHomePage } from './employee-home.page';

describe('EmployeeHomePage', () => {
  let component: EmployeeHomePage;
  let fixture: ComponentFixture<EmployeeHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
