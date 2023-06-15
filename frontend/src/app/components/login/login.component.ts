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

export class LoginComponent implements OnInit{

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  success = false;
  errorMessage = "";

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService, private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.isLoggedIn = false;
  }

  login() {
    const loginData = { username: this.form.username, password: this.form.password };
    this.loginService.loginUser(loginData.username, loginData.password).subscribe(response => {
      if(response){
        alert("Welcome " + response.username)
        this.isLoggedIn = true;
        this.tokenStorage.saveUser({ username: response.username, email: response.email })
        this.tokenStorage.saveToken(response.token);
        this.router.navigateByUrl("/all-issues")
      }
    })
  //   this.http.post(api, loginData, httpOptions).subscribe({
  //     next: (data : any) => {
  //       this.isLoggedIn = true;
  //       this.tokenStorage.saveToken(data.token);
  //       this.tokenStorage.saveUser({ username: data.username, email: data.email });
  //       window.location.reload();
  //       this.router.navigateByUrl("login/" + data.username)     //това го добавих аз
  //     },
  //     error: err => {
  //       if (err != null && err.error != null && err.error.message != null) {
  //         this.errorMessage = err.error.message;
  //       } else {
  //         this.errorMessage = "Error loggin in";
  //       }
  //       this.isLoggedIn = false;
  //     }
  //   })
   }

}



// login() {
//   const loginData = { username: this.form.username, password: this.form.password };
//   this.http.post(api, loginData, httpOptions).subscribe({
//     next: (data : any) => {
//       this.isLoggedIn = true;
//       this.tokenStorage.saveToken(data.token);
//       this.tokenStorage.saveUser({ username: data.username, email: data.email });
//       window.location.reload();
//     },
//     error: err => {
//       if (err != null && err.error != null && err.error.message != null) {
//         this.errorMessage = err.error.message;
//       } else {
//         this.errorMessage = "Error loggin in";
//       }
//       this.isLoggedIn = false;
//     }
//   })
// }



/////NOT TODO
// // TODO: remove the logout button from here
// logout() {
//   this.tokenStorage.signOut();
//   window.location.reload();
// }






