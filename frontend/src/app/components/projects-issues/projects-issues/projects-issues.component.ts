import { Component } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { ProjectService } from 'src/app/service/project-service';

@Component({
  selector: 'projects-issues',
  templateUrl: './projects-issues.component.html',
  styleUrls: ['./projects-issues.component.css'],
})
export class ProjectsIssuesComponent {
  projects: Project[] = [];

  constructor(private ProjectService: ProjectService) {
    this.ProjectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  isFormOpen: boolean = false;

  isOpen(isFOpen: boolean) {
    this.isFormOpen = isFOpen;
  }
}
