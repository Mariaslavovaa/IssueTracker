import { Component, Input } from '@angular/core';
import { IssueTicket } from 'src/app/models/issue-ticket-model';
@Component({
  selector: 'issue-ticket',
  templateUrl: './issue-ticket.component.html',
  styleUrls: ['./issue-ticket.component.css'],
})
export class IssueTicketComponent {
  @Input() ticket: IssueTicket;
}
