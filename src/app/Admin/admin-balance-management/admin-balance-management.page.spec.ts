import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBalanceManagementPage } from './admin-balance-management.page';

describe('AdminBalanceManagementPage', () => {
  let component: AdminBalanceManagementPage;
  let fixture: ComponentFixture<AdminBalanceManagementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBalanceManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
