import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { ProjectService } from 'src/app/service/project-service';

@Component({
  selector: 'app-add-user-to-project',
  templateUrl: './add-user-to-project.component.html',
  styleUrls: ['./add-user-to-project.component.css'],
})
export class AddUserToProjectComponent {
  @Input() project: Project;
  username: String = '';
  private projectService: ProjectService;

  constructor(projectService: ProjectService) {
    this.projectService = projectService;
  }

  saveAccess() {
    this.projectService.addAccess(this.username, this.project);
  }
}
