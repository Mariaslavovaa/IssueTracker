import { Component } from '@angular/core';

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
      todo: ['Issue2: Description', 'Issue2: Description'],
      inprogress: [],
      review: ['Something'],
      done: [],
    },
    {
      id: '2',
      name: 'Project2',
      todo: ['Issue1', 'Issue2', 'Issue5'],
      inprogress: [],
      review: ['Something'],
      done: [],
    },
  ];
}
