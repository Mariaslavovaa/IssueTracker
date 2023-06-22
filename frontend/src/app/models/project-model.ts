import { IssueTicket } from './issue-ticket-model';
import { User } from './user-model';

export class Project {
  title: string;
  allIssues: IssueTicket[];
  usersWithAccess: User[];

  constructor(title: string, allIssues: IssueTicket[], usersWithAccess: []) {
    this.title = title;
    this.allIssues = allIssues;
    this.usersWithAccess = usersWithAccess;
  }
}
