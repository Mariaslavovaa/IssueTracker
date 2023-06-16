package com.example.issue_tracker_backend.dtos;

import com.example.issue_tracker_backend.utils.Status;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TicketDto {
    private String title;
    private Status status;
    private String description;
    private String creator;
    private String assignedTo;
    private LocalDate dateOfCreation;
    private String projectTitle;
}
