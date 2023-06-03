import { Component } from '@angular/core';

@Component({
  selector: 'app-all-issues',
  templateUrl: './all-issues.component.html',
  styleUrls: ['./all-issues.component.css'],
})
export class AllIssuesComponent {
  todo = [
    'Issue1:description',
    'Issue2:description',
    'Issue3',
    'Issue4:description',
  ];
  inprogress = [];
  review = ['Issue5:description'];
  done = [];
}
