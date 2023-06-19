package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.dtos.ProjectDto;
import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.service.ProjectService;
import com.example.issue_tracker_backend.service.TicketService;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("private/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final TicketService ticketService;
    private final ProjectService projectService;

    @GetMapping("/issues/{id}")
    public ResponseEntity<List<TicketDto>> getTickets(@PathVariable("id") String title) {
        List<Ticket> tickets = ticketService.findAllTicketsByProject(title);
        return new ResponseEntity<>(tickets.stream().map(ticketService::entityToDto).toList(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<ProjectDto> createProject(@RequestBody ProjectDto projectDto) {
        try {
            return new ResponseEntity<>(projectService.entityToDto(projectService.createProject(
                    projectService.dtoToEntity(projectDto))), HttpStatus.CREATED);
        } catch (EntityExistsException | IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Project>> getAllProjects() {
        return new ResponseEntity<>(projectService.getAllProjects(), HttpStatus.OK);
    }

    @GetMapping("/all/{username}")
    public ResponseEntity<List<Project>> getProjectsByUser(@PathVariable("username") String username){
        return new ResponseEntity<>(projectService.getAllByUsername(username), HttpStatus.OK);
    }

    @DeleteMapping("/{title}")
    public void deleteProject(@PathVariable("title") String title){
        projectService.deleteByTitle(title);
    }
}
