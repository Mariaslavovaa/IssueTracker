package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.repository.TicketRepository;
import org.springframework.stereotype.Service;

@Service
public class TicketServiceImplementation implements TicketService{

    private final TicketRepository repository;


    public TicketServiceImplementation(final TicketRepository repository) {
        this.repository = repository;
    }

    @Override
    public Ticket createTicket(Ticket ticket) {
        if (ticket == null){
            throw new IllegalArgumentException("Ticket cannot be null!");
        }
        return repository.save(ticket);
    }

    @Override
    public Ticket updateTask(Ticket ticket) {
        return repository.save(ticket);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
