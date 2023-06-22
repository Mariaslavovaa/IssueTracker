import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    const url = `${environment.restApi}/users/all`;
    return this.http.get<User[]>(url);
  }

  getUserByUsername(username: String) {
    const url = `${environment.restApi}/users/${username}`;
    return this.http.get<User>(url);
  }
}
