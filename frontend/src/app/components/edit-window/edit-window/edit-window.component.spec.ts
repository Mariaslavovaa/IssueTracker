import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWindowComponent } from './edit-window.component';

describe('EditWindowComponent', () => {
  let component: EditWindowComponent;
  let fixture: ComponentFixture<EditWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditWindowComponent]
    });
    fixture = TestBed.createComponent(EditWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
