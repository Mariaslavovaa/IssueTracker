package com.example.issue_tracker_backend.dtos;

import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.utils.Status;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDto {
    private Long id;
    private String title;
    private Status status;
    private String description;
    private User creator;
    private LocalDate dateOfCreation;
    private Project project;

    public TicketDto(String title, String description, User creator, Project project){
        this.title = title;
        this.description = description;
        this.creator = creator;
        this.status = Status.TO_DO;
        this.dateOfCreation = LocalDate.now();
        this.project = project;
    }
}
