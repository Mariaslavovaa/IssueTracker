package com.example.issue_tracker_backend.repository;

import com.example.issue_tracker_backend.model.Project;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends CrudRepository<Project, String> {
    @Query(value = "select project_id from accessed_project where user_id = :username", nativeQuery = true)
    List<String> getProjectsByUsername(@Param("username") String username);
}
