import { Component } from '@angular/core';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css'],
})
export class AllIssuesComponent {
  todo = ['Task1', 'Task2', 'Task3', 'Task4'];
  inprogress = [];
  review = ['Task5'];
  done = [];
}
