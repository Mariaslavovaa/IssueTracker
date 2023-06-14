import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenStorageService } from 'src/app/service/token-service.service';

// Move along with the requests to auth service
const api = "http://localhost:8080/private/api/auth/login";
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
  isLoggedIn = false;
  success = false;
  errorMessage = "";

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = false;
  }

  login() {
    const loginData = { username: this.form.username, password: this.form.password };
    this.http.post(api, loginData, httpOptions).subscribe({
      next: (data : any) => {
        this.isLoggedIn = true;
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser({ username: data.username, email: data.email });
        window.location.href = "all-issues";
      },
      error: err => {
        if (err != null && err.error != null && err.error.message != null) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = "Error loggin in";
        }
        this.isLoggedIn = false;
      }
    })
  }

  // TODO: remove the logout button from here
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
