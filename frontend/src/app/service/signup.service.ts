import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignupUser } from '../models/signup-user-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private readonly http: HttpClient) { }

  public createUser(user : SignupUser) : Observable<SignupUser>{
    const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post<SignupUser>(`${environment.restApi}/private/api/auth/signup`, user, httpOptions);
  }

}
