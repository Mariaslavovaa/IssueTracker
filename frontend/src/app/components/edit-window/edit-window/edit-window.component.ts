import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, matSelectAnimations } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IssueTicket } from 'src/app/models/issue-ticket-model';

import { IssueTicketService } from 'src/app/service/issues-service';
import { isFormOpenService } from 'src/app/service/is-form-open-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgFor,
  ],
})
export class EditWindowComponent {
  ticket: IssueTicket;
  private issueTicketService: IssueTicketService;
  private isFormOpenService: isFormOpenService;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IssueTicket,
    issueTicketService: IssueTicketService,
    isFormOpenService: isFormOpenService,
    private dialogRef: MatDialogRef<EditWindowComponent>
  ) {
    this.issueTicketService = issueTicketService;
    this.isFormOpenService = isFormOpenService;
    this.ticket = Object.values(data)[0];
  }
  saveTicket() {
    this.issueTicketService.changeTicket(this.ticket).subscribe({
      next: (updatedTicket) => { console.log('Ticket updated:', updatedTicket), window.location.reload() },
      error: (error) => console.error('Error updating ticket:', error),
    });
  }

  deleteTicket() {
    this.issueTicketService.deleteTicket(this.ticket.id).subscribe({
      next: () => {
        console.log('Ticket deleted!')
        window.location.reload();
      },
      error: (error) => console.error('Error deleting ticket', error),
    });
  }

  closeDialog() {
    this.isFormOpenService.openForm(false);
    this.dialogRef.close();
  }
}
