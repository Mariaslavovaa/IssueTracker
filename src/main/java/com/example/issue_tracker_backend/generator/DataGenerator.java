package com.example.issue_tracker_backend.generator;

import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.ProjectRepository;
import com.example.issue_tracker_backend.repository.TicketRepository;
import com.example.issue_tracker_backend.repository.UserRepository;
import com.example.issue_tracker_backend.service.ProjectServiceImplementation;
import com.example.issue_tracker_backend.service.TicketServiceImplementation;
import com.example.issue_tracker_backend.utils.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDate;

@Configuration
public class DataGenerator {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner commandLineRunner(TicketRepository ticketRepository, UserRepository userRepository, ProjectRepository projectRepository, ProjectServiceImplementation projectServiceImplementation, TicketServiceImplementation ticketServiceImplementation) {
        return args -> {

            Project project1 = new Project("Project1");
            projectRepository.save(project1);

            Project project2 = new Project("Project2");
            projectRepository.save(project2);

            User user = new User("batsanov", "batsanov1@test.test", passwordEncoder.encode("123"));
            userRepository.save(user);


            User user1 = new User("batsanov1", "batsanov2@test.test", passwordEncoder.encode("123"));
            userRepository.save(user1);

            project1.giveAccessToUser(user);
            project1.giveAccessToUser(user1);
            projectRepository.save(project1);

            User user2 = new User("batsanov2", "batsanov3@test.test", passwordEncoder.encode("123"));
            userRepository.save(user2);

            Ticket ticket1 = new Ticket("defect1", "Defect1", user, null, project1);

            ticketRepository.save(ticket1);

            Ticket ticket2 = new Ticket("defect2", "Defect2", user, user2, project1);
            ticketRepository.save(ticket2);

            Ticket ticket3 = new Ticket("defect3", "Defect3", user, null, project2);
            ticketRepository.save(ticket3);

            // projectServiceImplementation.deleteById(project1.getId());
            TicketDto ticketDto = new TicketDto(0L, "defectChangedName", Status.REVIEW, "brbr", user2.getUsername(), null, LocalDate.now(), project2.getTitle());
            Ticket test = ticketServiceImplementation.dtoToEntity(ticketDto);
            ticketServiceImplementation.updateTicket(test, ticket3.getId());
        };
    }
}
