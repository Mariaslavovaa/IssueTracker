import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IssueTicket, Status } from 'src/app/models/issue-ticket-model';
import { MatDialog } from '@angular/material/dialog';
import { EditWindowComponent } from '../../edit-window/edit-window/edit-window.component';
import { Output, EventEmitter } from '@angular/core';

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
    }
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

  openDialog() {
    this.isFormOpen.emit(true);
    this.dialogRef.open(EditWindowComponent);
  }
}
