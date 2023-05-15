package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.conversions.UserConversion;
import com.example.issue_tracker_backend.dtos.UserDto;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AuthController {

    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("registration")
    public String signup(Model model) {
        UserDto user = new UserDto();
        model.addAttribute("user", user);
        return "registration";
    }

    @PostMapping("registration")
    public String signupSave(@ModelAttribute("user") UserDto userDto, BindingResult result, Model model) {
        // Check for duplicate emails.
        User existing = userService.findByEmail(userDto.getEmail());
        if (existing != null) {
            model.addAttribute("error", "There is already a user with the same email");
            return "registration";
        }
        // Check for duplicate usernames.
        existing = userService.findByUsername(userDto.getUsername());
        if (existing != null) {
            model.addAttribute("error", "There is already a user with the same username");
            return "registration";
        }
        User user = UserConversion.dtoToEntity(userDto);
        userService.createUser(user);
        return "redirect:/login";
    }

    @GetMapping("secret")
    public String secret() {
        return "secret";
    }

    @GetMapping("login")
    public String login(Model model) {
        return "login";
    }

}
