package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("private/api/tickets")
@RequiredArgsConstructor
public class TicketRestController {
    private final TicketService ticketService;

    @GetMapping("/{username}")
    public ResponseEntity<List<TicketDto>> getTickets(@PathVariable("username") String username) {
        List<Ticket> tickets = ticketService.findAllTicketsByUser(username);
        ArrayList<TicketDto> ticketsDto = new ArrayList<TicketDto>();
        ticketsDto.ensureCapacity(tickets.size());
        for (Ticket ticket : tickets) {
            ticketsDto.add(ticketService.entityToDto(ticket));
        }
        return new ResponseEntity<>(ticketsDto, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<TicketDto> createTicket(@RequestBody TicketDto ticketDto) {
        return new ResponseEntity<>(ticketService.entityToDto(ticketService
                .createTicket(ticketService.dtoToEntity(ticketDto))), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketDto> updateTicket(@PathVariable("id") Long id, @RequestBody TicketDto ticketDto) {
        return new ResponseEntity<>(ticketService.entityToDto(ticketService
                .updateTicket(ticketService.dtoToEntity(ticketDto), id)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteTicket(@PathVariable("id") Long id){
        ticketService.deleteById(id);
    }

}