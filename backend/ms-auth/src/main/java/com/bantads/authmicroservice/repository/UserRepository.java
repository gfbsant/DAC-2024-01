package com.bantads.authmicroservice.repository;

import com.bantads.authmicroservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
   User findByUsername(String username);
   User findByEmail(String email);
}
