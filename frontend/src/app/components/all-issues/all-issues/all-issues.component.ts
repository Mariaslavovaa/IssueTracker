import { Component } from '@angular/core';
import { IssueTicket, Status } from 'src/app/models/issue-ticket-model';
import { IssueTicketService } from 'src/app/service/issues-service';
import { TokenStorageService } from 'src/app/service/token-service.service';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css'],
})
export class AllIssuesComponent {
  allIssues: IssueTicket[] = [];
  //test data -> new IssueTicket(
  //   123,
  //   'Issue1',
  //   'Description',
  //   Status.inprogress,
  //   'Ivan',
  //   'Ivan',
  //   new Date(),
  //   'Project1'
  // ),

  constructor(
    private issueTicketService: IssueTicketService,
    private tokenStorage: TokenStorageService
  ) {
    this.issueTicketService.getAllTicketsCurrUser(tokenStorage.getUsername());
  }

  isFormOpen: boolean = false;

  isOpen(isFOpen: boolean) {
    this.isFormOpen = isFOpen;
  }
}
