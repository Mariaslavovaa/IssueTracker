import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IssueTicket, Status } from 'src/app/models/issue-ticket-model';
import { MatDialog } from '@angular/material/dialog';
import { EditWindowComponent } from '../../edit-window/edit-window/edit-window.component';
import { Output, EventEmitter } from '@angular/core';
import { IssueTicketService } from 'src/app/service/issues-service';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { TokenStorageService } from 'src/app/service/token-service.service';

@Component({
  selector: 'drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.css'],
})
export class DropListComponent {
  @Input() allIssues: IssueTicket[] = [];
  todo: IssueTicket[] = [];
  inprogress: IssueTicket[] = [];
  review: IssueTicket[] = [];
  done: IssueTicket[] = [];

  constructor(
    private dialogRef: MatDialog,
    private issueTicketService: IssueTicketService,
    private isFormOpenService: isFormOpenService
  ) {}

  drop(event: CdkDragDrop<IssueTicket[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    var splitId = event.container.id.split('-');
    var idIdx = splitId.length - 1;
    var id = parseInt(splitId[idIdx]);
    id = id % 4;
    switch (id) {
      case 0:
        this.changeStatus(event.container.data[0], Status.todo);
        break;
      case 1:
        this.changeStatus(event.container.data[0], Status.inprogress);
        break;
      case 2:
        this.changeStatus(event.container.data[0], Status.review);
        break;
      case 3:
        this.changeStatus(event.container.data[0], Status.done);
        break;
    }
  }

  changeStatus(ticket: IssueTicket, status: Status) {
    ticket.status = status;
    this.issueTicketService.changeTicket(ticket).subscribe({
      error: (error) => console.log(error),
    });
  }

  ngOnChanges() {
    if (this.allIssues === undefined) {
      return;
    }
    this.allIssues.forEach((issue) => {
      switch (issue.status) {
        case Status.todo:
          this.todo.push(issue);
          break;
        case Status.inprogress:
          this.inprogress.push(issue);
          break;
        case Status.review:
          this.review.push(issue);
          break;
        case Status.done:
          this.done.push(issue);
          break;
      }
    });
  }

  openDialog(ticket: IssueTicket) {
    this.isFormOpenService.openForm(true);

    this.dialogRef.open(EditWindowComponent, {
      data: { ticket },
    });
  }
}
