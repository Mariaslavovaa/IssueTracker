import { Component, Input } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.css'],
})

/*
 * @title Drag&Drop connected sorting
 */
export class DropListComponent {
  @Input() todo: string[] = [];
  @Input() inprogress: string[] = [];
  @Input() review: string[] = [];
  @Input() done: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
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
}
