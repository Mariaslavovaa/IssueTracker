package com.example.issue_tracker_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
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

    @ManyToMany(mappedBy = "usersWithAccess")
    private Set<Project> projects = new HashSet<>();

    @OneToMany(mappedBy = "creator")
    private Set<Ticket> tickets = new HashSet<>();

    public User(String username, String email, String password){
        this.username = username;
        this.email = email;
        this.password = password;

    }
    public void removeProject(Project project){
        projects.remove(project);
    }
}
