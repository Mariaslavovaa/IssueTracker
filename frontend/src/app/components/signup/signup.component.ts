import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { SignupUser } from 'src/app/models/signup-user-model';
import { SignupService } from 'src/app/service/signup.service';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {

  hide = true
  hideConfirmation = true
  signupUser?: SignupUser
  constructor(private readonly signupService: SignupService, private router: Router) {console.log("top konop") }

  form: any = {
    email: null,
    username: null,
    password: null,
    confirm_password: null
  };
  errorMessage = "";
  success = false;

  signup() {
    console.log("Creating")
    const signupData = { email: this.form.email, username: this.form.username, password: this.form.password, confirm_password: this.form.confirm_password };
    this.signupService.createUser(signupData).subscribe(response => {
      if (response) {
        alert("You have successfully registered")
        this.signupUser = response;
        //this.router.navigateByUrl("/login")
      }
    })
  }

}


// form: any = {
//   email: null,
//   username: null,
//   password: null,
//   confirm_password: null
// };
// errorMessage = "";
// success = false;

// constructor(private http: HttpClient) {}

// signup() {
//   const signupData = { email: this.form.email, username: this.form.username, password: this.form.password, confirm_password: this.form.confirm_password };
//   this.http.post(api, signupData, httpOptions).subscribe({
//     next: (data : any)  => {
//       this.success = true;
//       window.location.assign("/login");
//     },
//     error: err => {
//       if (err != null && err.error != null) {
//         this.errorMessage = err.error;
//       } else {
//         this.errorMessage = "Error signing up";
//       }
//       this.success = false;
//     }
//   });
// }