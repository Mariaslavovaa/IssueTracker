import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssueTicket } from '../models/issue-ticket-model';

@Injectable({
  providedIn: 'root',
})
export class IssueTicketService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllTicketsCurrUser(username: string | null): Observable<IssueTicket[]> {
    const url = `${this.baseUrl}/private/api/tickets/${username}`;
    return this.http.get<IssueTicket[]>(url);
  }

  //  createIssueTicket(issueTicket: IssueTicket): Observable<IssueTicket> {
  //     const url = `${this.baseUrl}/issuetickets`;
  //     return this.http.post<IssueTicket>(url, issueTicket);
  //   }
}
