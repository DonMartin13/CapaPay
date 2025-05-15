import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeNotificationPage } from './employee-notification.page';

describe('EmployeeNotificationPage', () => {
  let component: EmployeeNotificationPage;
  let fixture: ComponentFixture<EmployeeNotificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
