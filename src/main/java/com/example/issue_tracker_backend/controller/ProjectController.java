package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.conversions.TicketConversion;
import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.service.TicketService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/private/api/projects")
public class ProjectController {

    private final TicketService ticketService;

    public ProjectController(final TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("issues/{id}")
    public ResponseEntity<List<TicketDto>> getTickets(@PathVariable("id") Long id) {
        List<Ticket> tickets=ticketService.findAllTicketsByProject(id);
        ArrayList<TicketDto> ticketsDto = new ArrayList<TicketDto>();
        ticketsDto.ensureCapacity(tickets.size());
        for (Ticket ticket : tickets) {
            ticketsDto.add(TicketConversion.entityToDto(ticket));
        }
        return new ResponseEntity<>(ticketsDto, HttpStatus.OK);
    }
}
