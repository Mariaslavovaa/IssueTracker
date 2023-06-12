import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { User } from '../models/user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http:HttpClient) { }

  public loginUser(username:string, password:string) : Observable<User>{
    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {username: username, password: password}
    return this.http.post<User>(`${environment.restApi}/private/api/auth/login`, body, {headers: myheader});
  }

}



// public loginEmployee(username : string, password : string) : Observable<Employee>{
//   const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
//   let body = new HttpParams();
//   body = body.set('username', username);
//   body = body.set('password', password);
//   return this.http.post<Employee>(`${environment.restApi}/employees/login` ,body, {headers: myheader});
// }
