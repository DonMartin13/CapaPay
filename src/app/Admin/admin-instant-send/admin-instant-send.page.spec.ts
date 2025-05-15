import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminInstantSendPage } from './admin-instant-send.page';

describe('AdminInstantSendPage', () => {
  let component: AdminInstantSendPage;
  let fixture: ComponentFixture<AdminInstantSendPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInstantSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
