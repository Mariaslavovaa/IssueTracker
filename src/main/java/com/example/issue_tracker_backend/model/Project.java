package com.example.issue_tracker_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Project")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    @Id
    @Column(name = "Title", nullable = false)
    private String title;


    @ManyToMany()
    @JoinTable(
            name = "accessed_project",
            joinColumns = @JoinColumn(name = "project_id", referencedColumnName = "title"),
            inverseJoinColumns = @JoinColumn(name = "user_id", referencedColumnName = "username")
    )
    private Set<User> usersWithAccess = new HashSet<>();


    @OneToMany(mappedBy = "project")
    private Set<Ticket> tickets = new HashSet<>();

    public Project(String title) {
        this.title = title;
    }

    public void giveAccessToUser(User user) {
        usersWithAccess.add(user);
    }
}
