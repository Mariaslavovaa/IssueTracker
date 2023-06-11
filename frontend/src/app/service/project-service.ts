import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private baseUrl = '';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    const url = `${this.baseUrl}/projects/all`; // ??
    return this.http.get<Project[]>(url);
  }
}
