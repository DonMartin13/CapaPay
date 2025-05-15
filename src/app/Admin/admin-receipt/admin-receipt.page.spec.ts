import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminReceiptPage } from './admin-receipt.page';

describe('AdminReceiptPage', () => {
  let component: AdminReceiptPage;
  let fixture: ComponentFixture<AdminReceiptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
