package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProjectService {
    List<Project> getAllProjects();

    void deleteByTitle(String title);

}
