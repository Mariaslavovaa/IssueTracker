package com.example.issue_tracker_backend.conversions;

import com.example.issue_tracker_backend.dtos.UserDto;
import com.example.issue_tracker_backend.model.User;
import lombok.experimental.UtilityClass;

@UtilityClass
public class UserConversion {

    public static User dtoToEntity(UserDto userDto){
        return new User(userDto.getUsername(), userDto.getEmail(), userDto.getPassword());
    }
}

