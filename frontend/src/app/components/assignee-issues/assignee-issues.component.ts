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
      todo: ['Walk Dog', 'Go to work', 'Go on vacation'],
      inprogress: [],
      review: ['Fix sink'],
      done: [],
    },
    {
      id: '543',
      name: 'Georgi Ivanov',
      todo: ['Walk Fish', 'Go to bed', 'Go on a walk'],
      inprogress: [],
      review: ['Ne znam veche   '],
      done: [],
    },
  ];
}
