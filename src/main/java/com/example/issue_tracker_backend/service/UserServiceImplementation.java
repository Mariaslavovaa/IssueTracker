
package com.example.issue_tracker_backend.service;

import com.example.issue_tracker_backend.config.UserDetailsImplementation;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.UserRepository;

import com.example.issue_tracker_backend.utils.EmailValidator;
import jakarta.persistence.EntityExistsException;
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
    public UserServiceImplementation(final UserRepository repository, final PasswordEncoder passwordEncoder) {
        this.userRepository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    public void createUser(User user) {
        if (userRepository.existsById(user.getUsername())) {
            throw new IllegalArgumentException("Username already in use!");
        }
        if (this.findByEmail(user.getEmail()) != null) {
            throw new IllegalArgumentException("Email already in use");
        }
        if (!EmailValidator.validate(user.getEmail())) {
            throw new IllegalArgumentException("Invalid email");
        }

        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setEmail(user.getEmail());
        newUser.setPassword(passwordEncoder.encode(user.getPassword())); //hash user's password
        userRepository.save(newUser);
    }

    public User findByUsername(String username) {
        return userRepository.findById(username).orElseThrow(EntityExistsException::new);
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
        User user = userRepository.findById(username).orElseThrow(EntityExistsException::new);

        return new UserDetailsImplementation(user);
    }
}
