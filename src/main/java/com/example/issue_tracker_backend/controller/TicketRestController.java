package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("private/api/tickets")
@RequiredArgsConstructor
public class TicketRestController {
    private final TicketService ticketService;

}
