import { Project } from './project-model';
import { User } from './user-model';

export enum Status {
  todo,
  inprogress,
  review,
  done,
}

export class IssueTicket {
  id: number;
  title: string;
  description: string;
  status: Status;
  creator: string; //User;
  assignedTo: string;
  dateOfCreation: Date;
  project: string; //Project;

  constructor(
    id: number,
    title: string,
    description: string,
    status: Status,
    creator: string, //User
    assignedTo: string, //username
    dateOfCreation: Date,
    project: string //Project
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.creator = creator;
    this.dateOfCreation = dateOfCreation;
    this.project = project;
    this.assignedTo = assignedTo;
  }
}
