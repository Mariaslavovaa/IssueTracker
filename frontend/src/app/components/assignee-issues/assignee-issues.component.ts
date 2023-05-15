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
      todo: ['Task1', 'Task2', 'Task3'],
      inprogress: [],
      review: ['Task10'],
      done: [],
    },
    {
      id: '543',
      name: 'Georgi Ivanov',
      todo: ['Task4', 'Task5', 'Task6'],
      inprogress: [],
      review: ['Task7'],
      done: [],
    },
  ];
}
