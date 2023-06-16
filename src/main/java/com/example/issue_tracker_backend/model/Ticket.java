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
    @ManyToOne()
    @JoinColumn(name = "Creator", referencedColumnName = "username")
    private User creator;

    @ManyToOne()
    @JoinColumn(name = "AssignedTo", referencedColumnName = "username")
    private User assignedTo;

    @Column(name = "DateOfCreation", nullable = false)
    private LocalDate dateOfCreation;

    @ManyToOne()
    @JoinColumn(name = "project_id", referencedColumnName = "title", nullable = false)
    private Project project;

    public Ticket(String title, String description, User creator, User assignedTo, Project project) {
        this.title = title;
        this.description = description;
        this.creator = creator;
        this.status = Status.TO_DO;
        this.dateOfCreation = LocalDate.now();
        this.assignedTo = assignedTo;
        this.project = project;
    }

    public Ticket(String title, String description, User creator, Status status, User assignedTo, Project project) {
        this.title = title;
        this.description = description;
        this.creator = creator;
        this.status = status;
        this.dateOfCreation = LocalDate.now();
        this.assignedTo = assignedTo;
        this.project = project;
    }
}

