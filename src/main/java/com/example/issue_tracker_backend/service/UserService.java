package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    void createUser(User user);
    User findByUsername(String username);

    User findByEmail(String email);

}