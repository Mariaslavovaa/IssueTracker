package com.example.issue_tracker_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Project")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    @Id
    @SequenceGenerator(
            name = "project_sequence",
            sequenceName = "project_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "project_sequence"
    )
    private Long id;

    @Column(name = "Title", nullable = false)
    private String title;

    @ManyToMany(mappedBy = "projects")
    private Set<User> usersWithAccess = new HashSet<>();

    @OneToMany(mappedBy = "project")
    private Set<Ticket> tickets;
    public Project(String title){
        this.title = title;
    }
}
