import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KioskHomePage } from './kiosk-home.page';

describe('KioskHomePage', () => {
  let component: KioskHomePage;
  let fixture: ComponentFixture<KioskHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
