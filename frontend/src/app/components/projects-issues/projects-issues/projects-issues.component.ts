import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { IssueTicket, Status } from 'src/app/models/issue-ticket-model';
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
        this.projects.forEach(project => {
          ProjectService.getIssuesByProject(project).subscribe(issues => {
            if(issues){
              project.allIssues = issues;
            }
          })
        })
      },
      error: (err) => {
        
      }
    });
  }

  ngOnInit() {
    this.ProjectService.getProjects().subscribe({
    next: (projects) => {
      this.projects = projects;
      this.projects.forEach(project => {
        this.ProjectService.getIssuesByProject(project).subscribe(issues => {
          if(issues){
            project.allIssues = issues;
          }
        })
      })
    },
    error: (err) => {
      
    }
  });
    this.isFormOpenService.childEventListner().subscribe((info) => {
      this.isFormOpen = info;
    });
  }

  deleteProject(project: Project){
    this.ProjectService.deleteProject(project).subscribe(() => {
      window.location.reload();
    })
  }
}
