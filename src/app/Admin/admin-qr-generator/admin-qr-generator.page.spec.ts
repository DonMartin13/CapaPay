import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminQrGeneratorPage } from './admin-qr-generator.page';

describe('AdminQrGeneratorPage', () => {
  let component: AdminQrGeneratorPage;
  let fixture: ComponentFixture<AdminQrGeneratorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminQrGeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
