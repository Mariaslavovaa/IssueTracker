package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.dtos.ProjectDto;
import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.ProjectRepository;
import com.example.issue_tracker_backend.repository.TicketRepository;
import com.example.issue_tracker_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectServiceImplementation implements ProjectService {
    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;
    private final TicketRepository ticketRepository;

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
        if(projectRepository.existsById(project.getTitle())){
            throw new IllegalArgumentException("Project name already in use!");
        }
        String currentUserName = SecurityContextHolder.getContext().getAuthentication().getName();
        project.giveAccessToUser(userRepository.findByUsername(currentUserName));
        return projectRepository.save(project);
    }

    @Override
    public List<Project> getAllByUsername(String username) {
            return projectRepository.getProjectsByUsername(username).stream()
                    .map(id -> projectRepository.findById(id).orElseThrow())
                    .toList();
    }

    @Override
    public ProjectDto allowAccess(String username, String title){
        User found = userRepository.findByUsername(username);
        Project foundProject = projectRepository.findById(title).orElseThrow();

        foundProject.getUsersWithAccess().add(found);
        projectRepository.save(foundProject);

        return this.entityToDto(foundProject);
    }

    @Override
    public List<String> usersWithAccess(String title) {
        return projectRepository.getUsersWithAccessToProject(title);
    }
}
