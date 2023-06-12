import { Component } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css'],
})

export class AllIssuesComponent {
  todo = [
    new IssueTicket('Issue1', 'Description'),
    new IssueTicket('Issue2', 'Description'),
    new IssueTicket('Issue3', 'Description'),
    new IssueTicket('Issue4', 'Description'),
  ];
  inprogress = [];
  review = [new IssueTicket('Issue5', 'Description')];
  done = [new IssueTicket('Proba', 'Description')];

  isFormOpen: boolean = false;

  isOpen(isFOpen: boolean) {
    this.isFormOpen = isFOpen;
  }
}
