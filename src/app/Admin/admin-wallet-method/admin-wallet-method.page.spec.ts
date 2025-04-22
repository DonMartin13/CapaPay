import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminWalletMethodPage } from './admin-wallet-method.page';

describe('AdminWalletMethodPage', () => {
  let component: AdminWalletMethodPage;
  let fixture: ComponentFixture<AdminWalletMethodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWalletMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
