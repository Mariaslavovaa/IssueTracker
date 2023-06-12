import { Component } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';

@Component({
  selector: 'projects-issues',
  templateUrl: './projects-issues.component.html',
  styleUrls: ['./projects-issues.component.css'],
})
export class ProjectsIssuesComponent {
  projects = [
    {
      id: '1',
      name: 'Project1',
      todo: [new IssueTicket('Issue1', 'Description')],
      inprogress: [],
      review: [new IssueTicket('Issue2', 'Description')],
      done: [],
    },
    {
      id: '2',
      name: 'Project2',
      todo: [
        new IssueTicket('Issue3', 'Description'),
        new IssueTicket('Issue4', 'Description'),
        new IssueTicket('Issue5', 'Description'),
      ],
      inprogress: [],
      review: [new IssueTicket('Something', 'Description')],
      done: [],
    },
  ];

  isFormOpen: boolean = false;

  isOpen(isFOpen: boolean) {
    this.isFormOpen = isFOpen;
  }
}
