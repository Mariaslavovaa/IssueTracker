import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeIssuesComponent } from './assignee-issues.component';

describe('AssigneeIssuesComponent', () => {
  let component: AssigneeIssuesComponent;
  let fixture: ComponentFixture<AssigneeIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssigneeIssuesComponent]
    });
    fixture = TestBed.createComponent(AssigneeIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
