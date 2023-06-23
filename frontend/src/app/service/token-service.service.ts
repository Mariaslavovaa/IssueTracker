import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class TokenStorageService {
  constructor(private router: Router) {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem('SESSION');
    window.sessionStorage.setItem('SESSION', token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem('SESSION');
  }

  public getUsername(): string {
    const user = window.sessionStorage.getItem('USER');
    if (user != null) {
      const userObject = JSON.parse(user);
      return userObject.username;
    }

    this.router.navigateByUrl('/signup');
    return '';
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem('USER');
    window.sessionStorage.setItem('USER', JSON.stringify(user));
  }
}
