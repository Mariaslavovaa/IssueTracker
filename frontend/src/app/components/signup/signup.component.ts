import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

// Move along with the requests to auth service
const api = "http://localhost:8080/private/api/auth/signup";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {
  form: any = {
    email: null,
    username: null,
    password: null
  };
  errorMessage = "";
  success = false;

  constructor(private http: HttpClient) {}

  signup() {
    const signupData = { email: this.form.email, username: this.form.username, password: this.form.password };
    this.http.post(api, signupData, httpOptions).subscribe({
      next: (data : any)  => {
        this.success = true;
        window.location.assign("/login");
      },
      error: err => {
        if (err != null && err.error != null) {
          this.errorMessage = err.error;
        } else {
          this.errorMessage = "Error signing up";
        }
        this.success = false;
      }
    });
  }
}
