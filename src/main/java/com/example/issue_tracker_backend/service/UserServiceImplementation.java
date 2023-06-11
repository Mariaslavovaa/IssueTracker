
package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.TicketRepository;
import com.example.issue_tracker_backend.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImplementation implements UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TicketRepository ticketRepository;

    public UserServiceImplementation(final UserRepository repository, final PasswordEncoder passwordEncoder, final TicketRepository ticketRepository) {
        this.userRepository = repository;
        this.passwordEncoder = passwordEncoder;
        this.ticketRepository = ticketRepository;
    }

    public void createUser(User user) {
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword())); //hash user's password
        userRepository.save(newUser);
    }

    public User findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    public User findByEmail(String email) { return userRepository.findByEmail(email); }

    public ArrayList<User> getAllUsers() {
        Iterable<User> users=userRepository.findAll();

        return null;
    }
}
