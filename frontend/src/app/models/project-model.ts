import { IssueTicket } from './issue-ticket-model';

export class Project {
  id: number;
  title: string;
  allIssues: IssueTicket[];

  constructor(id: number, title: string, allIssues: IssueTicket[]) {
    this.id = id;
    this.title = title;
    this.allIssues = allIssues;
  }
}
