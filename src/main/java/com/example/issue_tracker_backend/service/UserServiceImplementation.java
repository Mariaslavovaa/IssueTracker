
package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.config.UserDetailsImplementation;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.TicketRepository;
import com.example.issue_tracker_backend.repository.UserRepository;

import org.hibernate.tool.schema.internal.exec.ScriptTargetOutputToFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImplementation implements UserService, UserDetailsService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImplementation(final UserRepository repository, final PasswordEncoder passwordEncoder, final TicketRepository ticketRepository) {
        this.userRepository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public void createUser(User user) {
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword())); //hash user's password
        userRepository.save(newUser);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            return new UserDetailsImplementation(user);
        } else {
            throw new UsernameNotFoundException("Invalid username or password");
        }
    }
}
