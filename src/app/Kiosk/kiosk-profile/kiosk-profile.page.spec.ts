import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KioskProfilePage } from './kiosk-profile.page';

describe('KioskProfilePage', () => {
  let component: KioskProfilePage;
  let fixture: ComponentFixture<KioskProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
