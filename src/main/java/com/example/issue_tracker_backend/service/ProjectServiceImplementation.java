package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectServiceImplementation implements ProjectService{
    private final ProjectRepository projectRepository;
    public ProjectServiceImplementation(final ProjectRepository projectRepository){
        this.projectRepository = projectRepository;
    }
    @Override
    public List<Project> getAllProjects() {
        List<Project> projects = new ArrayList<>();
        projectRepository.findAll().forEach(projects::add);
        return projects;
    }
}
