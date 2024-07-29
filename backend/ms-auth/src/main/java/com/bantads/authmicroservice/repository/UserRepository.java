package com.bantads.authmicroservice.repository;

import com.bantads.authmicroservice.model.User;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
   User findByUsername(String username);
   Optional<User> findByEmail(String email);
}
