package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.Ticket;
import org.springframework.stereotype.Service;

@Service
public interface TicketService {

    Ticket createTicket(Ticket ticket);
    Ticket updateTask(Ticket ticket, Long id);
    void deleteById(Long id);

}
