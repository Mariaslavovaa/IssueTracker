import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/internal/Observable';
import { IssueTicket, Status } from 'src/app/models/issue-ticket-model';
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
  private issueTicketService: IssueTicketService;

  constructor(
    private tokenStorage: TokenStorageService,
    issueTicketService: IssueTicketService
  ) {
    this.issueTicketService = issueTicketService;
    var temp = tokenStorage.getUsername();
    if (temp) {
      this.username = temp;
    }
  }

  saveTicket() {
    this.ticket.creator = this.username;
    this.issueTicketService.createTicket(this.ticket).subscribe({
      next: () => {
        console.log('Ticket deleted!')
        window.location.reload();
      },
      error: (error) => { console.error("Error deleting ticket", error); }
    });
  }
}
