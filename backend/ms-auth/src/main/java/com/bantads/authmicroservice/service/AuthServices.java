package com.bantads.authmicroservice.service;

import com.bantads.authmicroservice.dto.LoginRequestDTO;
import com.bantads.authmicroservice.repository.UserRepository;
import com.bantads.authmicroservice.security.TokenDTO;
import com.bantads.authmicroservice.security.jwt.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class AuthServices {

    private Logger logger = Logger.getLogger(AuthServices.class.getName());

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository repository;

    @SuppressWarnings("rawtypes")
    public ResponseEntity login(LoginRequestDTO data) {
        try {
            var email = data.getEmail();
            var password = data.getPassword();
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password));

            var user = repository.findByEmail(email);

            var tokenResponse = new TokenDTO();
            if (user != null) {
                tokenResponse = tokenService.createAccessToken(email, user.getRoles());
            } else {
                throw new UsernameNotFoundException("Email " + email + " not found!");
            }
            return ResponseEntity.ok(tokenResponse);
        } catch (Exception e) {
            throw new BadCredentialsException("Invalid username/password supplied!");
        }
    }

    @SuppressWarnings("rawtypes")
    public ResponseEntity refreshToken(String username, String refreshToken) {
        var user = repository.findByUsername(username);

        var tokenResponse = new TokenDTO();
        if (user != null) {
            tokenResponse = tokenService.refresh(refreshToken);
        } else {
            throw new UsernameNotFoundException("Username " + username + " not found!");
        }
        return ResponseEntity.ok(tokenResponse);
    }
    
}
