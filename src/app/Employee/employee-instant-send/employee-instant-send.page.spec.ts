import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeInstantSendPage } from './employee-instant-send.page';

describe('EmployeeInstantSendPage', () => {
  let component: EmployeeInstantSendPage;
  let fixture: ComponentFixture<EmployeeInstantSendPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeInstantSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
