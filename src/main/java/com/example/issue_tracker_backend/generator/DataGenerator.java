package com.example.issue_tracker_backend.generator;

import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.model.User;
import com.example.issue_tracker_backend.repository.ProjectRepository;
import com.example.issue_tracker_backend.repository.TicketRepository;
import com.example.issue_tracker_backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataGenerator {
    @Bean
    CommandLineRunner commandLineRunner(TicketRepository ticketRepository, UserRepository userRepository, ProjectRepository projectRepository){
        return args -> {

            Project project1 = new Project("Project1");
            projectRepository.save(project1);

            User user = new User("batsanov", "123");
            user.giveAccessToProject(project1);
            userRepository.save(user);

            User user1 = new User("batsanov1", "123");
            user1.giveAccessToProject(project1);
            userRepository.save(user1);

            User user2 = new User("batsanov2", "123");
            userRepository.save(user2);

            Ticket ticket1 = new Ticket( "defect1", "Defect1",user, project1);
            ticketRepository.save(ticket1);

            Ticket ticket2 = new Ticket( "defect2", "Defect2",user, project1);
            ticketRepository.save(ticket2);

            Ticket ticket3 = new Ticket( "defect3", "Defect3",user, project1);
            ticketRepository.save(ticket3);



        };
    }
}
