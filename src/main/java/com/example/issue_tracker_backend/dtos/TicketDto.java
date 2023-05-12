package com.example.issue_tracker_backend.dtos;

import com.example.issue_tracker_backend.utils.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class TicketDto {
    private Long id;
    private String title;
    private Status status;
    private String description;
    private String creator;
    private LocalDate dateOfCreation;
}
