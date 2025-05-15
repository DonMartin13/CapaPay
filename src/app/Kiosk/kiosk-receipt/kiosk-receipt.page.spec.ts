import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KioskReceiptPage } from './kiosk-receipt.page';

describe('KioskReceiptPage', () => {
  let component: KioskReceiptPage;
  let fixture: ComponentFixture<KioskReceiptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskReceiptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
