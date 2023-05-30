package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.config.UserDetailsImplementation;
import com.example.issue_tracker_backend.dtos.JwtResponse;
import com.example.issue_tracker_backend.dtos.LoginRequest;
import com.example.issue_tracker_backend.dtos.SignupRequest;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.service.UserService;
import com.example.issue_tracker_backend.utils.JwtTokenGenerator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@AllArgsConstructor
@Controller
@RequestMapping("/private/api/auth")
public class AuthController {

    private final UserService userService;

    private final AuthenticationManager authenticationManager;

    private final JwtTokenGenerator jwtGenerator;

    private final AuthenticationManager authManager;

    @Getter
    @Setter
    @AllArgsConstructor
    private class Test {
        public String message;
    }

    @PostMapping("signup")
    public ResponseEntity<?> signupSave(@RequestBody SignupRequest signupRequest) {
        User user = userService.findByUsername(signupRequest.getUsername());
        if (user != null) {
            return ResponseEntity.badRequest().body(new Test("Username already taken"));
        }
        user = userService.findByEmail(signupRequest.getUsername());
        if (user != null) {
            return ResponseEntity.badRequest().body(new Test("Email already in use"));
        }
        User newUser = new User(signupRequest.getUsername(), signupRequest.getEmail(), signupRequest.getPassword());
        userService.createUser(newUser);
        return ResponseEntity.ok(new Test("User registered successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(), loginRequest.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = jwtGenerator.generate(auth);
        UserDetailsImplementation userDetails = (UserDetailsImplementation)auth.getPrincipal();
        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getEmail()));
    }

}
