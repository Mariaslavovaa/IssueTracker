package com.example.issue_tracker_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "Users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(name = "username", nullable = false, unique = true)
    String username;

    @JsonIgnore
    @Column(name = "password", nullable = false)
    String password;

    @Column(name = "email", nullable = false)
    String email;

    @ManyToMany(mappedBy = "usersWithAccess")
    private Set<Project> projects = new HashSet<>();

    @OneToMany(mappedBy = "creator")
    private Set<Ticket> tickets = new HashSet<>();

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;

    }

    public void addProject(Project project) {
        projects.add(project);
    }
}
