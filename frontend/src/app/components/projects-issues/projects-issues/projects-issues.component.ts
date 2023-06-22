import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { IssueTicket, Status } from 'src/app/models/issue-ticket-model';
import { Project } from 'src/app/models/project-model';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { ProjectService } from 'src/app/service/project-service';
import { TokenStorageService } from 'src/app/service/token-service.service';
import { AddUserToProjectComponent } from '../../add-user-to-project/add-user-to-project.component';

@Component({
  selector: 'projects-issues',
  templateUrl: './projects-issues.component.html',
  styleUrls: ['./projects-issues.component.css'],
})
export class ProjectsIssuesComponent {
  projects: Project[] = [];
  isFormOpen: boolean = false;

  @Output() isFormOpenEmitter = new EventEmitter<boolean>(false); //: boolean = false;

  constructor(
    private ProjectService: ProjectService,
    private tokenStorage: TokenStorageService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit() {
    this.ProjectService.getProjectsByUsername(
      this.tokenStorage.getUsername()
    ).subscribe({
      next: (projects) => {
        this.projects = projects;
        this.projects.forEach((project) => {
          this.ProjectService.getIssuesByProject(project).subscribe(
            (issues) => {
              if (issues) {
                project.allIssues = issues;
              }
            }
          );
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteProject(project: Project) {
    this.ProjectService.deleteProject(project).subscribe(() => {
      window.location.reload();
    });
  }

  addUser() {
    this.isFormOpenEmitter.emit(true);
    this.dialogRef.open(AddUserToProjectComponent);
  }
}
