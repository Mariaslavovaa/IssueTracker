package com.example.issue_tracker_backend.model;

import com.example.issue_tracker_backend.utils.Status;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "Ticket")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {

    @Id
    @SequenceGenerator(
            name = "issue_sequence",
            sequenceName = "issue_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "issue_sequence"
    )
    private Long id;
    @Column(name = "Title", nullable = false)
    private String title;
    @Column(name = "Status", nullable = false)
    private Status status;
    @Column(name = "Description", nullable = false)
    private String description;
    @OneToOne()
    @JoinColumn(name = "Creator", referencedColumnName = "id")
    private User creator;
    @Column(name = "DateOfCreation", nullable = false)
    private LocalDate dateOfCreation;

    @OneToOne()
    @JoinColumn(name = "project_id", referencedColumnName = "id", nullable = false)
    private Project project;

    public Ticket(String title, String description, User creator, Project project) {
        this.title = title;
        this.description = description;
        this.creator = creator;
        this.status = Status.TO_DO;
        this.dateOfCreation = LocalDate.now();
        this.project = project;
    }
}

