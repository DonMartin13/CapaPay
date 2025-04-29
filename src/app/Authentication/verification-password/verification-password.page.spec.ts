import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificationPasswordPage } from './verification-password.page';

describe('VerificationPasswordPage', () => {
  let component: VerificationPasswordPage;
  let fixture: ComponentFixture<VerificationPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
