import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private readonly http: HttpClient) { }


  public createUser(employee : User) : Observable<User>{
    const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
    return this.http.post<User>(`${environment.restApi}/private/api/auth/signup`, employee, httpOptions);
  }

}
