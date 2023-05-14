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
      todo: ['Task1', 'Task2'],
      inprogress: [],
      review: ['Something'],
      done: [],
    },
    {
      id: '2',
      name: 'Project2',
      todo: ['Go Outside', 'Walk Dog', 'Secret Task'],
      inprogress: [],
      review: ['Something'],
      done: [],
    },
  ];
}
