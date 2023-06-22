import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-service.service';
import { AddNewTicketComponent } from '../../add-new-ticket/add-new-ticket.component';
import { AddNewProjectComponent } from '../../add-new-project/add-new-project.component';
import { isFormOpenService } from 'src/app/service/is-form-open-service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(
    private readonly tokenService: TokenStorageService,
    private readonly router: Router,
    private dialogRef: MatDialog,
    private isFormOpenService: isFormOpenService
  ) {}

  addNewTicket() {
    this.isFormOpenService.openForm(true);
    this.dialogRef.open(AddNewTicketComponent);
  }

  addNewProject() {
    this.dialogRef.open(AddNewProjectComponent);
  }

  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl('/login');
  }
}
