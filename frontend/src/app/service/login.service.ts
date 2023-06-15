import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { LoginUser } from '../models/login-user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http:HttpClient) { }

  public loginUser(username:string, password:string) : Observable<LoginUser>{
    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {username: username, password: password}
    return this.http.post<LoginUser>(`${environment.restApi}/private/api/auth/login`, body, {headers: myheader});
  }

}
