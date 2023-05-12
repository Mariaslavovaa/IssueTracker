package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.Ticket;

public interface TicketService {

    Ticket createTicket(Ticket ticket);
    Ticket updateTask(Ticket ticket);
    void deleteById(Long id);

}
