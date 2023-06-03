package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.conversions.TicketConversion;
import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("private/api/tickets")
@RequiredArgsConstructor
public class TicketRestController {
    private final TicketService ticketService;

    @PostMapping()
    public ResponseEntity<TicketDto> createTicket(@RequestBody TicketDto ticketDto){
        return new ResponseEntity<>(TicketConversion.entityToDto(ticketService
                .createTicket(TicketConversion.dtoToEntity(ticketDto))), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TicketDto> updateTicket(@PathVariable("id") Long id, @RequestBody TicketDto ticketDto){
        return new ResponseEntity<>(TicketConversion.entityToDto(ticketService
                .updateTask(TicketConversion.dtoToEntity(ticketDto), id)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteTicket(@PathVariable("id") Long id){
        ticketService.deleteById(id);
    }

}