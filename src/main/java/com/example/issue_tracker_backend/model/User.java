package com.example.issue_tracker_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;


@Entity
@Table(name = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    @Column(name = "username", nullable = false, unique = true)
    String username;
    @Column(name = "password", nullable = false)
    String password;

    @Column(name = "email", nullable = false)
    String email;

    @ManyToMany()
    @JoinTable(
            name = "accessed_project",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "project_id", referencedColumnName = "id")
    )
    private List<Project> projects = new ArrayList<>();

    @OneToMany(mappedBy = "creator")
    private Set<Ticket> tickets;

    public User(String username, String email, String password){
        this.username = username;
        this.email = email;
        this.password = password;

    }
    public void giveAccessToProject(Project project) {
        projects.add(project);
    }
}
