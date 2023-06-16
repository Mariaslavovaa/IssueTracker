package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.ProjectRepository;
import com.example.issue_tracker_backend.repository.TicketRepository;
import com.example.issue_tracker_backend.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketServiceImplementation implements TicketService {

    private final TicketRepository repository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;


    public TicketServiceImplementation(final TicketRepository repository, final UserRepository userRepository, ProjectRepository projectRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.projectRepository = projectRepository;
    }

    @Override
    public Ticket createTicket(Ticket ticket) {
        if (ticket == null) {
            throw new IllegalArgumentException("Ticket cannot be null!");
        }
        if (ticket.getAssignedTo() != null && userRepository.findByUsername(ticket.getAssignedTo().getUsername()) == null) {
            throw new IllegalArgumentException("Invalid username");
        }
        return repository.save(ticket);
    }

    @Override
    public Ticket updateTicket(Ticket ticket, Long id) {
        Ticket found = repository.findById(id).orElseThrow(EntityExistsException::new);
        found.setStatus(ticket.getStatus());
        found.setCreator(ticket.getCreator());
        found.setTitle(ticket.getTitle());
        found.setProject(ticket.getProject());
        found.setDateOfCreation(ticket.getDateOfCreation());
        found.setDescription(ticket.getDescription());
        return repository.save(found);
    }

    public TicketDto entityToDto(Ticket ticket) {
        return new TicketDto(ticket.getTitle(), ticket.getStatus(),
                ticket.getDescription(), ticket.getCreator().getUsername(), ticket.getAssignedTo().getUsername(), ticket.getDateOfCreation(), ticket.getProject().getTitle());
    }

    public Ticket dtoToEntity(TicketDto ticketDto) {
        User creator = userRepository.findById(ticketDto.getCreator()).orElseThrow(EntityExistsException::new);
        User assignedTo;
        if (ticketDto.getAssignedTo() == null) {
            assignedTo = null;
        } else {
            assignedTo = userRepository.findById(ticketDto.getAssignedTo()).orElseThrow(EntityExistsException::new);
        }
        Project project = projectRepository.findById(ticketDto.getProjectTitle()).orElseThrow(EntityExistsException::new);

        return new Ticket(ticketDto.getTitle(), ticketDto.getDescription(), creator, ticketDto.getStatus(), assignedTo, project);
    }

    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }

    public List<Ticket> findAllTicketsByUser(String username) {
        User user = userRepository.findByUsername(username);
        return repository.findAllByAssignedTo(user);
    }

    public List<Ticket> findAllTicketsByProject(String title) {
        return repository.findAllByProjectTitle(title);
    }
}
