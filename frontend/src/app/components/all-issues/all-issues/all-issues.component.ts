import { Component } from '@angular/core';
import { IssueTicket, Status } from 'src/app/models/issue-ticket-model';
import { IssueTicketService } from 'src/app/service/issues-service';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css'],
})
export class AllIssuesComponent {
  allIssues: IssueTicket[] = [];

  constructor(private issueTicketService: IssueTicketService) {
    this.issueTicketService
      .getAllTicketsCurrUser(localStorage.getItem('currUsername'))
      .subscribe((issueTickets) => {
        this.allIssues = issueTickets;
      });
  }

  isFormOpen: boolean = false;

  isOpen(isFOpen: boolean) {
    this.isFormOpen = isFOpen;
  }

}
