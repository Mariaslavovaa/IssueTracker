import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-service.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private readonly tokenService: TokenStorageService, private readonly router: Router){}

  logout(){
    this.tokenService.signOut();
    this.router.navigateByUrl("/login")
  }
}
