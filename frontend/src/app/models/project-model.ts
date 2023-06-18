import { IssueTicket } from './issue-ticket-model';

export class Project {
  title: string;
  allIssues: IssueTicket[];

  constructor(title: string, allIssues: IssueTicket[]) {
    this.title = title;
    this.allIssues = allIssues;
  }
}
