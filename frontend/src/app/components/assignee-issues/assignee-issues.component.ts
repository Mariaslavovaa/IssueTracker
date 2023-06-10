import { Component } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';

@Component({
  selector: 'app-assignee-issues',
  templateUrl: './assignee-issues.component.html',
  styleUrls: ['./assignee-issues.component.css'],
})
export class AssigneeIssuesComponent {
  users = [
    {
      id: '123',
      name: 'Ivan Petrov',
      todo: [
        new IssueTicket('Issue1', 'Description'),
        new IssueTicket('Issue2', 'Description'),
        new IssueTicket('Issue3', 'Description'),
      ],
      inprogress: [],
      review: [new IssueTicket('Issue4', 'Description')],
      done: [],
    },
    {
      id: '543',
      name: 'Georgi Ivanov',
      todo: [
        new IssueTicket('Issue4', 'You need to do...'),
        new IssueTicket('Issue5', 'Description'),
      ],
      inprogress: [],
      review: [new IssueTicket('Issue6', 'Description')],
      done: [],
    },
  ];

  isFormOpen: boolean = false;

  isOpen(isFOpen: boolean) {
    this.isFormOpen = isFOpen;
  }
}
