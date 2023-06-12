import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidePasswordComponent } from './hide-password.component';

describe('HidePasswordComponent', () => {
  let component: HidePasswordComponent;
  let fixture: ComponentFixture<HidePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HidePasswordComponent]
    });
    fixture = TestBed.createComponent(HidePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
