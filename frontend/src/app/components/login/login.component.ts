import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const api = "localhost:8080/login";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  form: any = {
    username: null,
    password: null
  };
  success = false;
  errorMessage = "";

  constructor(private http: HttpClient) {}

  login() {
    const loginData = { username: this.form.username, password: this.form.password };
    this.http.post(api, loginData, httpOptions).subscribe({
      next: (data : any) => {
        this.success = true;
        localStorage.setItem("token", data.token);
        console.log(data);
        // this.tokenStorage.saveToken(data.accessToken);
      },
      error : err => {
        console.log(err)
      }
    })
  }
}
