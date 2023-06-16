package com.example.issue_tracker_backend.repository;

import com.example.issue_tracker_backend.model.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends CrudRepository<Project, String> {

}
