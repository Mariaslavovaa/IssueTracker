import { Component } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { ProjectService } from 'src/app/service/project-service';
import { TokenStorageService } from 'src/app/service/token-service.service';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.css']
})
export class AddNewProjectComponent {
  project: Project = new Project('', []);
  private projectService: ProjectService;

  constructor(private tokenStorage: TokenStorageService, projectService: ProjectService){
    this.projectService = projectService;
  }

  saveProject() {
    this.projectService.createProject(this.project).subscribe(response => {
      if(response){
        window.location.reload();
      }
    });
  }

}


