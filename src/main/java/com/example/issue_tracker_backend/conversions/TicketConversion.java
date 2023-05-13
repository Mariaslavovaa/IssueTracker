package com.example.issue_tracker_backend.conversions;

import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Ticket;
import lombok.experimental.UtilityClass;

@UtilityClass
public class TicketConversion {
    public static TicketDto entityToDto(Ticket ticket){
        return new TicketDto(ticket.getId(), ticket.getTitle(), ticket.getStatus(),
                ticket.getDescription(), ticket.getCreator(), ticket.getDateOfCreation());
    }

    public static Ticket dtoToEntity(TicketDto ticketDto){
        return new Ticket(ticketDto.getId(), ticketDto.getTitle(), ticketDto.getStatus(),
                ticketDto.getDescription(), ticketDto.getCreator(), ticketDto.getDateOfCreation());
    }
}

