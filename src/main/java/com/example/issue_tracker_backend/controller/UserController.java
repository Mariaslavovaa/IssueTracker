package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping(path = "all")
    ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

}
