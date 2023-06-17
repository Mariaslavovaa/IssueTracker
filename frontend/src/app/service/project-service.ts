import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects() {
    const url = `${environment.restApi}/projects/all`;
    return this.http.get<Project[]>(url);
  }

  createProject(project: Project) {
    const url = `${environment.restApi}/private/api/projects`;
    return this.http.post<Project>(url, project);
  }

  deleteProject(project: Project) : Observable<any>{
    return this.http.delete(`${environment.restApi}/projects/${project.title}`);
  }


}
