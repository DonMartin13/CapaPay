import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KioskDetailsPage } from './kiosk-details.page';

describe('KioskDetailsPage', () => {
  let component: KioskDetailsPage;
  let fixture: ComponentFixture<KioskDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
