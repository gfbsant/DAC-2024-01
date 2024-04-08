package com.bantads.authmicroservice.seeder;

import com.bantads.authmicroservice.model.User;
import com.bantads.authmicroservice.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DatabaseSeeder {

    @Autowired
    private UserRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void seedDatabase() {

        if (repository.count() > 0) return;

        User admin = new User();
        admin.setUsername("admin");
        admin.setEmail("admin@mail.com");
        admin.setPassword(passwordEncoder.encode("admin123"));
        admin.setAccountNonExpired(true);
        admin.setAccountNonLocked(true);
        admin.setRoles(List.of("ADMINISTRADOR"));
        admin.setEnabled(true);

        User manager = new User();
        manager.setUsername("manager");
        manager.setEmail("manager@mail.com");
        manager.setPassword(passwordEncoder.encode("manager123"));
        manager.setAccountNonExpired(true);
        manager.setAccountNonLocked(true);
        manager.setRoles(List.of("GERENTE"));
        manager.setEnabled(true);

        User client = new User();
        client.setUsername("client");
        client.setEmail("client@mail.com");
        client.setPassword(passwordEncoder.encode("client123"));
        client.setAccountNonExpired(true);
        client.setAccountNonLocked(true);
        client.setRoles(List.of("CLIENTE"));
        client.setEnabled(true);

        // Salvar usuários de teste no banco de dados
        repository.save(admin);
        repository.save(manager);
        repository.save(client);
    }
}