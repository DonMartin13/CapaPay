import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KioskScannerPage } from './kiosk-scanner.page';

describe('KioskScannerPage', () => {
  let component: KioskScannerPage;
  let fixture: ComponentFixture<KioskScannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KioskScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
