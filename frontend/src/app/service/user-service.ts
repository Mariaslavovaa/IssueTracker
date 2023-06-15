import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllUsers(): User[] {
    var result: User[] = [];

    const url = `${this.baseUrl}/users/all`; // ??
    this.http.get<User[]>(url).subscribe((users) => {
      result = users;
    });

    return result;
  }
}
