import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IssueTicket } from '../models/issue-ticket-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IssueTicketService {
  constructor(private http: HttpClient) {}

  getAllTicketsCurrUser(username: string | null) {
    const url = `${environment.restApi}/private/api/tickets/${username}`;
    return this.http.get<IssueTicket[]>(url);
  }

  changeTicket(ticket: IssueTicket) {
    //!!!!!!!! to do: remove console log
    this.http.put<IssueTicket>(`${environment.restApi}/private/api/tickets/${ticket.id}`, ticket).subscribe({
      next: (updatedTicket) => console.log('Ticket updated:', updatedTicket),
      error: (error) => console.error('Error updating ticket:', error),
    });
  }

  changeStatus(ticket: IssueTicket, username: String) {
    this.http
      .put<IssueTicket>(`${environment.restApi}/private/api/tickets/${ticket.id}`, ticket)
      .subscribe({
        // nz dali moje taka
        next: (updatedTicket) => console.log('Ticket updated:', updatedTicket),
        error: (error) => console.error('Error updating ticket:', error),
      });
  }

  deleteTicket(ticketId: number) {
    //!!!!!!!! to do: remove console log
    this.http.delete<IssueTicket>(`${environment.restApi}/private/api/tickets/${ticketId}`).subscribe({
      next: () => console.log('Ticket deleted!'),
      error: (error) => console.error('Error deleting ticket', error),
    });
  }

  createTicket(issueTicket: IssueTicket) {
    const url = `${environment.restApi}/private/api/tickets`;
    return this.http.post<IssueTicket>(url, issueTicket);
  }
}
