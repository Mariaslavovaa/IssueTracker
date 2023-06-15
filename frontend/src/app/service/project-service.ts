import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProjects(): Project[] {
    var result: Project[] = [];
    const url = `${this.baseUrl}/projects/all`; // ??
    this.http.get<Project[]>(url).subscribe((projects) => {
      result = projects;
    });
    return result;
  }
}
