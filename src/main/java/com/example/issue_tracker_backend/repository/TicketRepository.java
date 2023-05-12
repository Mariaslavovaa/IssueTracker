package com.example.issue_tracker_backend.repository;

import com.example.issue_tracker_backend.model.Ticket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, Long> {

}
