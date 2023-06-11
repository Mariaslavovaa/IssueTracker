import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IssueTicket } from '../models/issue-ticket-model';

@Injectable({
  providedIn: 'root',
})
export class IssueTicketService {
  private baseUrl = 'private/api/tickets';

  constructor(private http: HttpClient) {}

  getAllTicketsCurrUser(username: string | null): Observable<IssueTicket[]> {
    const url = `${this.baseUrl}/${username}`; // ??? zavisi li neshto dr ot toq url
    return this.http.get<IssueTicket[]>(url);
  }

  //  createIssueTicket(issueTicket: IssueTicket): Observable<IssueTicket> {
  //     const url = `${this.baseUrl}/issuetickets`;
  //     return this.http.post<IssueTicket>(url, issueTicket);
  //   }
}
