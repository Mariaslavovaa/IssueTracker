import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueTicketComponent } from './issue-ticket.component';

describe('IssueTicketComponent', () => {
  let component: IssueTicketComponent;
  let fixture: ComponentFixture<IssueTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueTicketComponent]
    });
    fixture = TestBed.createComponent(IssueTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
