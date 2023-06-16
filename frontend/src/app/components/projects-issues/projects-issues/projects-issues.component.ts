import { Component } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { ProjectService } from 'src/app/service/project-service';

@Component({
  selector: 'projects-issues',
  templateUrl: './projects-issues.component.html',
  styleUrls: ['./projects-issues.component.css'],
})
export class ProjectsIssuesComponent {
  projects: Project[] = [];
  isFormOpen: boolean = false;

  constructor(
    private ProjectService: ProjectService,
    private isFormOpenService: isFormOpenService
  ) {
    this.ProjectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (err) => {
        
      }
    });
  }

  ngOnInit() {
    this.isFormOpenService.childEventListner().subscribe((info) => {
      this.isFormOpen = info;
    });
  }
}
