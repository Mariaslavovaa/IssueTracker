import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class isFormOpenService {
  private childClickedEvent = new BehaviorSubject<boolean>(false);

  openForm(msg: boolean) {
    this.childClickedEvent.next(msg);
  }

  childEventListner() {
    return this.childClickedEvent.asObservable();
  }
}
