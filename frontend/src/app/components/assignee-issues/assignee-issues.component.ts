import { Component } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';
import { User } from 'src/app/models/user-model';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-assignee-issues',
  templateUrl: './assignee-issues.component.html',
  styleUrls: ['./assignee-issues.component.css'],
})
export class AssigneeIssuesComponent {
  users: User[] = [];

  constructor(private UserService: UserService) {
    this.UserService.getAllUsers().subscribe({
      next: (users : any) => {
        this.users = users;
      },
      error: (err : any) => {
        window.location.href="login";
      }
    });
  }

  isFormOpen: boolean = false;

  isOpen(isFOpen: boolean) {
    this.isFormOpen = isFOpen;
  }
}
