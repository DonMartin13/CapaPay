import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KioskRegisterPage } from './kiosk-register.page';

describe('KioskRegisterPage', () => {
  let component: KioskRegisterPage;
  let fixture: ComponentFixture<KioskRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
