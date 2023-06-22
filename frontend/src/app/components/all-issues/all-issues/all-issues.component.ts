import { Component } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { IssueTicketService } from 'src/app/service/issues-service';
import { TokenStorageService } from 'src/app/service/token-service.service';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css'],
})
export class AllIssuesComponent {
  allIssues: IssueTicket[] = [];

  isFormOpen: boolean = false;

  constructor(
    private issueTicketService: IssueTicketService,
    private tokenStorage: TokenStorageService,
    private isFormOpenService: isFormOpenService
  ) {
    this.issueTicketService
      .getAllTicketsCurrUser(tokenStorage.getUsername())
      .subscribe((issueTickets) => {
        this.allIssues = issueTickets;
      });
  }

  ngOnInit() {
    this.isFormOpenService.childEventListner().subscribe((info) => {
      this.isFormOpen = info;
    });
  }
}
