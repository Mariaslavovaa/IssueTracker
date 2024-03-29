import { Component } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';
import { User } from 'src/app/models/user-model';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { IssueTicketService } from 'src/app/service/issues-service';
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
    private IsFormOpenService: isFormOpenService,
    private readonly ticketService: IssueTicketService
  ) {
    this.UserService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.users.forEach(user => {
          ticketService.getAllTicketsCurrUser(user.username).subscribe(response =>{
            if(response){
              console.log(response)
              user.allIssues = response;
            }
          })
        })
      }
    })

    
  }

  ngOnInit() {
    this.IsFormOpenService.childEventListner().subscribe((info) => {
      this.isFormOpen = info;
    });
  }
}
