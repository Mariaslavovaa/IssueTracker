import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/service/token-service.service';
import { AddNewTicketComponent } from '../../add-new-ticket/add-new-ticket.component';
import { AddNewProjectComponent } from '../../add-new-project/add-new-project.component';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  @Output() isFormOpen = new EventEmitter<boolean>(false); //: boolean = false;

  constructor(
    private readonly tokenService: TokenStorageService,
    private readonly router: Router,
    private dialogRef: MatDialog
  ) {}

  addNewTicket() {
    this.isFormOpen.emit(true);
    this.dialogRef.open(AddNewTicketComponent);
  }

  addNewProject() {
    this.isFormOpen.emit(true);
    this.dialogRef.open(AddNewProjectComponent);
  }

  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl('/login');
  }
}
