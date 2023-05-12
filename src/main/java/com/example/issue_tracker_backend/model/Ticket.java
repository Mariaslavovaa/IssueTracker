package com.example.issue_tracker_backend.model;

import com.example.issue_tracker_backend.utils.Status;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "Ticket")
@Data @AllArgsConstructor @NoArgsConstructor @EqualsAndHashCode
public class Ticket {

    @Id
    private Long id;
    @Column (name = "Title", nullable = false)
    private String title;
    @Column (name = "Status")
    private Status status;
    @Column(name = "Description")
    private String description;
    @Column(name = "Creator")
    private String creator;
    @Column(name = "DateOfCreation")
    private LocalDate dateOfCreation;

}

