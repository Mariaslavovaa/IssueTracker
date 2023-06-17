package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.dtos.ProjectDto;
import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.ProjectRepository;
import com.example.issue_tracker_backend.repository.TicketRepository;
import jakarta.persistence.EntityExistsException;
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

    @Override
    public Project dtoToEntity(ProjectDto projectDto) {
        return new Project(projectDto.getTitle());
    }

    @Override
    public ProjectDto entityToDto(Project project) {
        return new ProjectDto(project.getTitle());
    }

    @Override
    public Project createProject(Project project) {
        if (project == null) {
            throw new IllegalArgumentException("Project cannot be null!");
        }
        return projectRepository.save(project);
    }

}
