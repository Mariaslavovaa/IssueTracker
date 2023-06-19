package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.config.UserDetailsImplementation;
import com.example.issue_tracker_backend.dtos.LoginRequest;
import com.example.issue_tracker_backend.dtos.LoginResponse;
import com.example.issue_tracker_backend.dtos.SignupRequest;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.service.UserService;
import com.example.issue_tracker_backend.utils.JwtTokenGenerator;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
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

    @PostMapping("/signup")
    public ResponseEntity<User> signupSave(@RequestBody SignupRequest signupRequest) {
        User newUser = new User(signupRequest.getUsername(), signupRequest.getEmail(), signupRequest.getPassword());
        try {
            userService.createUser(newUser);
        } catch (IllegalArgumentException ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok().body(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticateUser(@RequestBody LoginRequest loginRequest) {
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(), loginRequest.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = jwtGenerator.generate(auth);
        UserDetailsImplementation userDetails = (UserDetailsImplementation)auth.getPrincipal();
        return ResponseEntity.ok(new LoginResponse(jwt, userDetails.getUsername(), userDetails.getEmail()));
    }
}
