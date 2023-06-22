import { Project } from './project-model';
import { User } from './user-model';

export enum Status {
  todo = 'TO_DO',
  inprogress = 'IN_PROGRESS',
  review = 'REVIEW',
  done = 'DONE',
}

export class IssueTicket {
  id: number;
  title: String;
  description: String;
  status: Status;
  creator: String;
  assignedTo: String;
  dateOfCreation: Date;
  projectTitle: String;

  constructor(
    id: number,
    title: string,
    description: string,
    status: Status,
    creator: string,
    assignedTo: string,
    dateOfCreation: Date,
    projectTitle: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.creator = creator;
    this.dateOfCreation = dateOfCreation;
    this.projectTitle = projectTitle;
    this.assignedTo = assignedTo;
  }
}
