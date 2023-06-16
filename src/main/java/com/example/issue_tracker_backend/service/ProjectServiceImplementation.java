package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.repository.ProjectRepository;
import com.example.issue_tracker_backend.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectServiceImplementation implements ProjectService {
    private final ProjectRepository projectRepository;
    private final TicketRepository ticketRepository;

    public ProjectServiceImplementation(final ProjectRepository projectRepository, TicketRepository ticketRepository) {
        this.projectRepository = projectRepository;
        this.ticketRepository = ticketRepository;
    }

    @Override
    public List<Project> getAllProjects() {
        List<Project> projects = new ArrayList<>();
        projectRepository.findAll().forEach(projects::add);
        return projects;
    }

    @Override
    public void deleteByTitle(String title) {
        ticketRepository.findAllByProjectTitle(title).forEach(ticket -> ticketRepository.deleteById(ticket.getId()));
        projectRepository.deleteById(title);
    }

}
