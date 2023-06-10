import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IssueTicket } from 'src/app/models/issue-ticket-model';
import { MatDialog } from '@angular/material/dialog';
import { EditWindowComponent } from '../../edit-window/edit-window/edit-window.component';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.css'],
})
export class DropListComponent {
  @Input() todo: IssueTicket[] = [];
  @Input() inprogress: IssueTicket[] = [];
  @Input() review: IssueTicket[] = [];
  @Input() done: IssueTicket[] = [];

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

  openDialog() {
    this.isFormOpen.emit(true);
    this.dialogRef.open(EditWindowComponent);
  }
}
