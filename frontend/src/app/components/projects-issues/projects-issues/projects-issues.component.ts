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

  constructor(
    private ProjectService: ProjectService,
    private tokenStorage: TokenStorageService,
    private dialogRef: MatDialog,
    private isFormOpenService: isFormOpenService
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
    this.isFormOpenService.childEventListner().subscribe((info) => {
      this.isFormOpen = info;
    });
  }

  deleteProject(project: Project) {
    this.ProjectService.deleteProject(project).subscribe(() => {
      window.location.reload();
    });
  }

  addUser(project: Project) {
    this.isFormOpenService.openForm(true);
    // this.isFormOpenEmitter.emit(true);
    var popup = this.dialogRef.open(AddUserToProjectComponent);
    popup.componentInstance.projectTitle = project.title;
    // addUser(title: string){
    //   //TODO @DARI to integrate with the modal
    //   // this.ProjectService.allowAccess(username, title).subscribe(response => {
    //   //   if(response){
    //   //     console.log("success")
    //   //   }
    //   // })
  }
}
