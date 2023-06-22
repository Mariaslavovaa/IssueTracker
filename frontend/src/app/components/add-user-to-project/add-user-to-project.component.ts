import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { ProjectService } from 'src/app/service/project-service';

@Component({
  selector: 'app-add-user-to-project',
  templateUrl: './add-user-to-project.component.html',
  styleUrls: ['./add-user-to-project.component.css'],
})
export class AddUserToProjectComponent {
  projectTitle: string;
  username: string = '';
  private projectService: ProjectService;
  private isFormOpenService: isFormOpenService;

  constructor(
    projectService: ProjectService,
    isFormOpenService: isFormOpenService
  ) {
    this.projectService = projectService;
    this.isFormOpenService = isFormOpenService;
  }

  saveAccess() {
    this.projectService
      .allowAccess(this.username, this.projectTitle)
      .subscribe({
        next: (project) => {
          console.log(project);
        },
        error: (error) => {
          console.log(error);
        },
      });
    this.isFormOpenService.openForm(false);
    window.location.reload();
  }

  closeDialog() {
    this.isFormOpenService.openForm(false);
    window.location.reload();
  }
}
