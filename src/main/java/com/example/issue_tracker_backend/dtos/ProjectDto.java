package com.example.issue_tracker_backend.dtos;

import com.example.issue_tracker_backend.utils.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDto {
    private String title;
}
