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
  private issueTicketService: IssueTicketService;

  @Output() isFormOpen = new EventEmitter<boolean>(false); //: boolean = false;

  drop(event: CdkDragDrop<IssueTicket[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      switch (event.container.id) {
        case 'cdk-drop-list-0':
          this.changeStatus(event.container.data[0], Status.todo);
          break;
        case 'cdk-drop-list-1':
          this.changeStatus(event.container.data[0], Status.inprogress);
          break;
        case 'cdk-drop-list-2':
          this.changeStatus(event.container.data[0], Status.done);
          break;
        case 'cdk-drop-list-3':
          this.changeStatus(event.container.data[0], Status.review);
          break;
      }
    }
  }

  changeStatus(ticket: IssueTicket, status: Status) {
    ticket.status = status;
    this.issueTicketService.changeTicket(ticket);
  }

  constructor(private dialogRef: MatDialog) {}

  ngOnChanges() {
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
    this.isFormOpen.emit(true);
    this.dialogRef.open(EditWindowComponent, {
      data: { ticket },
    });
  }
}
