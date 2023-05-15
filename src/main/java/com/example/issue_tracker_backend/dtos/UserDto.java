package com.example.issue_tracker_backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data

@NoArgsConstructor
public class UserDto {

    private String username;

    private String email;

    private String password;



    public UserDto(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;

    }

}
