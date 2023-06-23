import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { SignupUser } from 'src/app/models/signup-user-model';
import { SignupService } from 'src/app/service/signup.service';
import { MatFormField } from '@angular/material/form-field';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {

  hide = true
  hideConfirmation = true
  signupUser?: SignupUser

  constructor(private readonly signupService: SignupService, private router: Router) { }

  form: any = {
    email: null,
    username: null,
    password: null,
    confirm_password: null
  };
  errorMessage = "";
  
  passwordsMatch(): boolean {
    return this.form.password === this.form.confirm_password;
  }

  signup() {
    if (!this.passwordsMatch()) {
      return;
    }
    const signupData = { email: this.form.email, username: this.form.username, password: this.form.password, confirm_password: this.form.confirm_password };
    this.signupService.createUser(signupData).subscribe({
      next: (response) => {
        if (response) {
          this.signupUser = response;
          this.router.navigateByUrl("/login")
        }
      },
      error: (err) => {
        if (err && err.error) {
          this.errorMessage=err.error;
        } else {
          this.errorMessage="Unknown error";
        }
      }
    })
  }

}
