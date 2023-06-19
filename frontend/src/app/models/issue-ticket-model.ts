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
  creator: String; //User;
  assignedTo: String; //user
  dateOfCreation: Date;
  projectTitle: String; //Project;

  constructor(
    id: number,
    title: string,
    description: string,
    status: Status,
    creator: string, //User
    assignedTo: string, //username
    dateOfCreation: Date,
    projectTitle: string //Project
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
