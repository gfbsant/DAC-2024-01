package com.bantads.authmicroservice.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bantads.authmicroservice.dto.LoginRequestDTO;
import com.bantads.authmicroservice.dto.RegisterRequestDTO;
import com.bantads.authmicroservice.dto.ResponseDTO;
import com.bantads.authmicroservice.model.User;
import com.bantads.authmicroservice.model.enums.ERole;
import com.bantads.authmicroservice.repository.UserRepository;
import com.bantads.authmicroservice.security.jwt.TokenService;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
    private UserRepository repository;
	@Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<ResponseDTO> login(@RequestBody LoginRequestDTO body){
        Optional<User> user1 = repository.findByEmail(body.email());
        if (user1.isPresent()){
        	User user = user1.get();
        	if(passwordEncoder.matches(body.password(), user.getPassword())) {
        		String token = this.tokenService.generateToken(user);
        		return ResponseEntity.ok(new ResponseDTO(user.getUsername(), token, user.getRole().toString()));
        	}
        }
        return ResponseEntity.badRequest().build();
    }


    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> register(@RequestBody RegisterRequestDTO body){
        Optional<User> user = repository.findByEmail(body.email());

        if(user.isEmpty()) {
            User newUser = new User();
            newUser.setPassword(passwordEncoder.encode(body.password()));
            newUser.setEmail(body.email());
            newUser.setUsername(body.name());
            newUser.setRole(ERole.CLIENTE);
            this.repository.save(newUser);

            String token = this.tokenService.generateToken(newUser);
            return ResponseEntity.ok(new ResponseDTO(newUser.getUsername(), token, newUser.getRole().toString()));
        }
        return ResponseEntity.badRequest().build();
    }
}