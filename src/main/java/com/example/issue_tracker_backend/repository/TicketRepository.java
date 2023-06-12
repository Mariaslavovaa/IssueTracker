package com.example.issue_tracker_backend.repository;

import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, Long> {
    List<Ticket> findAllByAssignedTo(User creator);

    List<Ticket> findAllByProjectId(Long id);
}
