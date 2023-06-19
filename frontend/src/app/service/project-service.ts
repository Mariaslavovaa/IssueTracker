import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project-model';
import { environment } from 'src/environments/environment';
import { IssueTicket } from '../models/issue-ticket-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects() {
    const url = `${environment.restApi}/private/api/projects/all`;
    return this.http.get<Project[]>(url);
  }

  createProject(project: Project) {
    const url = `${environment.restApi}/private/api/projects`;
    return this.http.post<Project>(url, project);
  }

  deleteProject(project: Project) : Observable<any>{
    return this.http.delete(`${environment.restApi}/private/api/projects/${project.title}`);
  }

  getIssuesByProject(project: Project) : Observable<IssueTicket[]>{
    return this.http.get<IssueTicket[]>(`${environment.restApi}/private/api/projects/issues/${project.title}`)
  }

}
