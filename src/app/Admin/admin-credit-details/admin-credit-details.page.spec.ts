import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminCreditDetailsPage } from './admin-credit-details.page';

describe('AdminCreditDetailsPage', () => {
  let component: AdminCreditDetailsPage;
  let fixture: ComponentFixture<AdminCreditDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreditDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
