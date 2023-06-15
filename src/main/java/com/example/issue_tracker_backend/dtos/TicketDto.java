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
    private User assignedTo;
    private LocalDate dateOfCreation;
    private Project project;
}
