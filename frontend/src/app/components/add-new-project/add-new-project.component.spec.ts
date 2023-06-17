import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProjectComponent } from './add-new-project.component';

describe('AddNewProjectComponent', () => {
  let component: AddNewProjectComponent;
  let fixture: ComponentFixture<AddNewProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewProjectComponent]
    });
    fixture = TestBed.createComponent(AddNewProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
