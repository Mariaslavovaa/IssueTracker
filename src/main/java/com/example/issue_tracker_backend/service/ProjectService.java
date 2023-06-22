package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.dtos.ProjectDto;
import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProjectService {
    List<Project> getAllProjects();

    void deleteByTitle(String title);

    Project dtoToEntity(ProjectDto projectDto);

    ProjectDto entityToDto(Project project);

    Project createProject(Project project);

    List<Project> getAllByUsername(String username);

    ProjectDto allowAccess(String username, String title);

    List<String> usersWithAccess(String title);
}
