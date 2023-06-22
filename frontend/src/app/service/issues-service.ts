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
    return this.http.put<IssueTicket>(
      `${environment.restApi}/private/api/tickets/${ticket.id}`,
      ticket
    );
  }

  deleteTicket(ticketId: number) {
    return this.http.delete<IssueTicket>(
      `${environment.restApi}/private/api/tickets/${ticketId}`
    );
  }

  createTicket(issueTicket: IssueTicket) {
    const url = `${environment.restApi}/private/api/tickets`;
    return this.http.post<IssueTicket>(url, issueTicket);
  }
}
