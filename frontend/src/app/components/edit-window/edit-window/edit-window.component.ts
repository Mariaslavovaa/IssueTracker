import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IssueTicket } from 'src/app/models/issue-ticket-model';

import { IssueTicketService } from 'src/app/service/issues-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class EditWindowComponent {
  ticket: IssueTicket;
  private issueTicketService: IssueTicketService;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IssueTicket) {
    this.ticket = Object.values(data)[0];
  }
  saveTicket() {
    this.issueTicketService.changeTicket(this.ticket);
  }

  deleteTicket() {
    this.issueTicketService.deleteTicket(this.ticket.id);
  }
}
