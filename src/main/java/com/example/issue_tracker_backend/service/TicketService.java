package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TicketService {

    Ticket createTicket(Ticket ticket);
    Ticket updateTask(Ticket ticket, Long id);
    void deleteById(Long id);

    List<Ticket> findAllTicketsByUser(String username);

    List<Ticket> findAllTicketsByProject(Long id);

}
