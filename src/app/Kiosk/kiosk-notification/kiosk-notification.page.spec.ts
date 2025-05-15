import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KioskNotificationPage } from './kiosk-notification.page';

describe('KioskNotificationPage', () => {
  let component: KioskNotificationPage;
  let fixture: ComponentFixture<KioskNotificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
