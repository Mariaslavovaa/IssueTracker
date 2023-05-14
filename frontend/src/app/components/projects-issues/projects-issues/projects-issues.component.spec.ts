import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsIssuesComponent } from './projects-issues.component';

describe('ProjectsIssuesComponent', () => {
  let component: ProjectsIssuesComponent;
  let fixture: ComponentFixture<ProjectsIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsIssuesComponent]
    });
    fixture = TestBed.createComponent(ProjectsIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
