package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Ticket;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TicketService {

    Ticket createTicket(Ticket ticket);
    Ticket updateTicket(Ticket ticket, Long id);
    void deleteById(Long id);

    List<Ticket> findAllTicketsByUser(String username);

    List<Ticket> findAllTicketsByProject(String title);

    TicketDto entityToDto(Ticket ticket);

    Ticket dtoToEntity(TicketDto ticketDto);
}
