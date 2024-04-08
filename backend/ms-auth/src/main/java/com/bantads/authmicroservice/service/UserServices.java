package com.bantads.authmicroservice.service;

import com.bantads.authmicroservice.controller.UserController;
import com.bantads.authmicroservice.dto.UserDTO;
import com.bantads.authmicroservice.exception.ResourceNotFoundException;
import com.bantads.authmicroservice.mapper.ModelMapper;
import com.bantads.authmicroservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Service
public class UserServices implements UserDetailsService {
    private Logger logger = Logger.getLogger(UserServices.class.getName());

    @Autowired
    UserRepository repository;

    public UserServices(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username == null || username.isEmpty()) {
            throw new UsernameNotFoundException("Username is not provided!");
        }
        logger.info("Finding one user by name " + username + "!");
        var user = repository.findByUsername(username);
        if (user != null) {
            return user;
        } else {
            throw new UsernameNotFoundException("Username " + username + " not found!");
        }
    }

    public List<UserDTO> findAll() {
        logger.info("Finding all people!");
        var people = ModelMapper.parseListObjects(repository.findAll(),
                UserDTO.class);
        people.forEach(p -> {
            try {
                p.add(linkTo(methodOn(UserController.class).findById(p.getId())).withSelfRel());
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        });
        return people;
    }

    public UserDTO findById(String id) throws Exception {
        logger.info("Finding one user!");
        var entity = repository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No records found for this ID"));
        UserDTO vo = ModelMapper.parseObject(entity, UserDTO.class);
        vo.add(linkTo(methodOn(UserController.class).findById(id)).withSelfRel());
        return vo;
    }


}
