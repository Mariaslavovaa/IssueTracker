package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.dtos.JwtResponse;
import com.example.issue_tracker_backend.dtos.LoginRequest;
import com.example.issue_tracker_backend.service.UserService;
import com.example.issue_tracker_backend.utils.JwtTokenGenerator;
import lombok.AllArgsConstructor;
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

@AllArgsConstructor
@Controller
public class AuthController {

    private final UserService userService;

    private final AuthenticationManager authenticationManager;

    private final JwtTokenGenerator jwtGenerator;

    private final AuthenticationManager authManager;

    @GetMapping("registration")
    public String signup(Model model) {
        return "registration";
    }

    @PostMapping("registration")
    public ResponseEntity<?> signupSave(@RequestBody LoginRequest loginRequest) {
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(), loginRequest.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = jwtGenerator.generate(auth);
        UserDetails userDetails = (UserDetails)auth.getPrincipal();
        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), ""));
    }

    @GetMapping("secret")
    public String secret() {
        return "secret";
    }

    @GetMapping("login")
    public String login(Model model) {
        return "login";
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {
        System.out.println("Here");
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(), loginRequest.getPassword()
        ));
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwt = jwtGenerator.generate(auth);
        UserDetails userDto = (UserDetails)auth.getPrincipal();
        return ResponseEntity.ok(new JwtResponse(jwt, userDto.getUsername(), ""));
    }

}
