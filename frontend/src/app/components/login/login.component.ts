import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-service.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  hide = true

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  success = false;
  errorMessage = "";

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn = false;
  }

  login() {
    const loginData = { username: this.form.username, password: this.form.password };
    this.loginService.loginUser(loginData.username, loginData.password).subscribe({
      next: response => {
        if (response) {
          this.isLoggedIn = true;
          this.tokenStorage.saveUser({ username: response.username, email: response.email })
          this.tokenStorage.saveToken(response.token);
          this.router.navigateByUrl("/all-issues")
        }
      },
      error: err => {
        if (err && err.error && err.error.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = "Invalid credentials";
        }
      }
    })
  }
}


