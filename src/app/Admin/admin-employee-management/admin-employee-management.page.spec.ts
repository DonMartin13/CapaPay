import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEmployeeManagementPage } from './admin-employee-management.page';

describe('AdminEmployeeManagementPage', () => {
  let component: AdminEmployeeManagementPage;
  let fixture: ComponentFixture<AdminEmployeeManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
