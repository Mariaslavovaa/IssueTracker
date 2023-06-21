package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.dtos.ProjectDto;
import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.ProjectRepository;
import com.example.issue_tracker_backend.repository.TicketRepository;
import com.example.issue_tracker_backend.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class TicketServiceImplementation implements TicketService {
    private final TicketRepository repository;
    private final UserRepository userRepository;
    private final ProjectRepository projectRepository;

    @Override
    public Ticket createTicket(Ticket ticket) {
        System.out.println("DTO FROM BE");
        System.out.println("PROJECT: " + ticket.getProject());
        System.out.println("DESCRIPTION: " + ticket.getDescription());
        System.out.println("STATUS: " + ticket.getStatus());
        System.out.println("DATE: " + ticket.getDateOfCreation());
        System.out.println("CREATOR: " + ticket.getCreator());
        System.out.println("ASSIGNED TO: " + ticket.getAssignedTo());
        System.out.println("TITLE: " + ticket.getTitle());
        System.out.println("ID: " + ticket.getId());

        if (ticket.getAssignedTo() != null) {
            if (userRepository.findByUsername(ticket.getAssignedTo().getUsername()) == null)
                throw new IllegalArgumentException("Invalid username");
        }
        Project project = projectRepository.findById(ticket.getProject().getTitle()).orElseThrow(IllegalArgumentException::new);
        project.getTickets().add(ticket);
        projectRepository.save(project);
        return repository.save(ticket);
    }

    @Override
    public Ticket updateTicket(Ticket ticket, Long id) {
        Ticket found = repository.findById(id).orElseThrow(EntityExistsException::new);
        found.setStatus(ticket.getStatus());
        found.setCreator(ticket.getCreator());
        found.setAssignedTo(ticket.getAssignedTo());
        found.setTitle(ticket.getTitle());
        found.setProject(ticket.getProject());
        found.setDateOfCreation(ticket.getDateOfCreation());
        found.setDescription(ticket.getDescription());
        return repository.save(found);
    }

    public TicketDto entityToDto(Ticket ticket) {
        String assignedTo = ticket.getAssignedTo() == null ? "" : ticket.getAssignedTo().getUsername();
        return new TicketDto(ticket.getId(), ticket.getTitle(), ticket.getStatus(),
                ticket.getDescription(), ticket.getCreator().getUsername(), assignedTo, ticket.getDateOfCreation(), ticket.getProject().getTitle());
    }

    public Ticket dtoToEntity(TicketDto ticketDto) {
        User creator = userRepository.findById(ticketDto.getCreator()).orElseThrow(EntityExistsException::new);
        User assignedTo;
        if (ticketDto.getAssignedTo().equals("")) {
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
