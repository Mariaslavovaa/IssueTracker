import { IssueTicket } from './issue-ticket-model';
import { Project } from './project-model';

export class User {
  username: string;
  password: string;
  email: string;
  projects: Project[];
  allIssues: IssueTicket[];

  constructor(
    username: string,
    password: string,
    email: string,
    projects: Project[],
    allIssues: IssueTicket[]
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.projects = projects;
    this.allIssues = allIssues;
  }
}
