import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

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

  constructor(private http: HttpClient) {}

  signup() {
    const signupData = { email: this.form.email, username: this.form.username, password: this.form.password };
    this.http.post("localhost:8080/signup", signupData).subscribe({
      next: (data : any)  => {
        // this.success = true;
        console.log(data);
        localStorage.setItem("token", data.token);
        // this.tokenStorage.saveToken(data.accessToken);
      },
      error : err => {
        this.errorMessage = err.error.message;
      }
    })
  }
}
