import { Component } from '@angular/core';

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
      todo: ['Issue1:description', 'Issue2', 'Issue3'],
      inprogress: [],
      review: ['Issue10'],
      done: [],
    },
    {
      id: '543',
      name: 'Georgi Ivanov',
      todo: ['Issue4:description', 'Issue5: You need to do....', 'Issue6'],
      inprogress: [],
      review: ['Issue7: description'],
      done: [],
    },
  ];
}
