import { Component } from '@angular/core';
import { IssueTicket, Status } from 'src/app/models/issue-ticket-model';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { IssueTicketService } from 'src/app/service/issues-service';
import { TokenStorageService } from 'src/app/service/token-service.service';

@Component({
  selector: 'app-add-new-ticket',
  templateUrl: './add-new-ticket.component.html',
  styleUrls: ['./add-new-ticket.component.css'],
})
export class AddNewTicketComponent {
  ticket: IssueTicket = new IssueTicket(
    -1,
    '',
    '',
    Status.todo,
    '',
    '',
    new Date(),
    ''
  );
  date: Date = new Date();
  username: String = '';

  constructor(
    private tokenStorage: TokenStorageService,
    private issueTicketService: IssueTicketService,
    private isFormOpenService: isFormOpenService
  ) {
    this.issueTicketService = issueTicketService;
    var temp = tokenStorage.getUsername();
    if (temp) {
      this.username = temp;
    }
  }

  saveTicket() {
    this.ticket.creator = this.username;
    this.issueTicketService.createTicket(this.ticket).subscribe({});
    window.location.reload();
  }

  DisplayError() {
    return 'You must enter a value';
  }

  IsValidForm() {
    return (
      this.ticket.title.length > 0 &&
      this.ticket.assignedTo.length > 0 &&
      this.ticket.projectTitle.length > 0
    );
  }
  closeDialog() {
    this.isFormOpenService.openForm(false);
    window.location.reload();
  }
}
