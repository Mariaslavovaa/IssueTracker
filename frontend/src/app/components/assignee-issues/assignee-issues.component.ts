import { Component } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';
import { User } from 'src/app/models/user-model';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { UserService } from 'src/app/service/user-service';

@Component({
  selector: 'app-assignee-issues',
  templateUrl: './assignee-issues.component.html',
  styleUrls: ['./assignee-issues.component.css'],
})
export class AssigneeIssuesComponent {
  users: User[] = [];
  isFormOpen: boolean = false;

  constructor(
    private UserService: UserService,
    private IsFormOpenService: isFormOpenService
  ) {
    this.UserService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
      }
    })
  }

  ngOnInit() {
    this.IsFormOpenService.childEventListner().subscribe((info) => {
      this.isFormOpen = info;
    });
  }
}
