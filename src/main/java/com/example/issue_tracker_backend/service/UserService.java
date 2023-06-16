package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {

    void createUser(User user);
    User findByUsername(String username);

    User findByEmail(String email);

    List<User> getAllUsers();

}