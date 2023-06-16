import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IssueTicket } from '../models/issue-ticket-model';

@Injectable({
  providedIn: 'root',
})
export class IssueTicketService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllTicketsCurrUser(username: string | null): IssueTicket[] {
    var result: IssueTicket[] = [];

    const url = `${this.baseUrl}/private/api/tickets/${username}`;
    this.http.get<IssueTicket[]>(url).subscribe((issueTickets) => {
      result = issueTickets;
    });
    return result;
  }

  changeTicket(ticket: IssueTicket) {
    //!!!!!!!! to do: remove console log
    this.http.put<IssueTicket>(`/api/tickets/${ticket.id}`, ticket).subscribe({
      next: (updatedTicket) => console.log('Ticket updated:', updatedTicket),
      error: (error) => console.error('Error updating ticket:', error),
    });
  }

  changeStatus(ticket: IssueTicket, username: String) {
    this.http
      .put<IssueTicket>(`/api/tickets/${ticket.id}/${username}`, ticket)
      .subscribe({
        // nz dali moje taka
        next: (updatedTicket) => console.log('Ticket updated:', updatedTicket),
        error: (error) => console.error('Error updating ticket:', error),
      });
  }

  deleteTicket(ticketId: number) {
    //!!!!!!!! to do: remove console log
    this.http.delete<IssueTicket>(`/api/tickets/${ticketId}`).subscribe({
      next: () => console.log('Ticket deleted!'),
      error: (error) => console.error('Error deleting ticket', error),
    });
  }

  createTicket(issueTicket: IssueTicket) {
    const url = `${this.baseUrl}/issuetickets`;
    return this.http.post<IssueTicket>(url, issueTicket);
  }
}
