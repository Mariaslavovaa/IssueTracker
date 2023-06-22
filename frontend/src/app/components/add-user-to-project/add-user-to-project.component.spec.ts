import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserToProjectComponent } from './add-user-to-project.component';

describe('AddUserToProjectComponent', () => {
  let component: AddUserToProjectComponent;
  let fixture: ComponentFixture<AddUserToProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserToProjectComponent]
    });
    fixture = TestBed.createComponent(AddUserToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
