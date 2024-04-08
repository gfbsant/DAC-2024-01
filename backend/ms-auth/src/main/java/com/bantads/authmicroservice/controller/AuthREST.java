package com.bantads.authmicroservice.controller;


import com.bantads.authmicroservice.dto.LoginRequestDTO;
import com.bantads.authmicroservice.dto.RegisterRequestDTO;
import com.bantads.authmicroservice.dto.ResponseDTO;
import com.bantads.authmicroservice.dto.UserDTO;
import com.bantads.authmicroservice.model.User;
import com.bantads.authmicroservice.repository.UserRepository;
import com.bantads.authmicroservice.security.TokenDTO;
import com.bantads.authmicroservice.security.jwt.TokenService;
import com.bantads.authmicroservice.service.AuthServices;
import com.bantads.authmicroservice.service.UserServices;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@Tag(name = "Authentication Endpoint")
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthREST {

    @Autowired
    AuthServices authServices;

    @Autowired
    UserServices userServices;

    @Autowired
    private UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @Operation(summary = "Authenticates a user and returns a token")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginRequestDTO data) {
        if (checkIfParamsIsNotNull(data))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid client request!");
        var token = authServices.login(data);
        if (token == null)
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Token not generated!");
        return token;
    }

    private static boolean checkIfParamsIsNotNull(String username, String refreshToken) {
        return refreshToken == null || refreshToken.isBlank() || username == null || username.isBlank();
    }

    private boolean checkIfParamsIsNotNull(LoginRequestDTO data) {
        return data == null || data.getEmail() == null || data.getEmail().isBlank()
                || data.getPassword() == null || data.getPassword().isBlank();
    }

    @Operation(summary = "Register a new user")
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO registerRequest) {
        if (userRepository.findByEmail(registerRequest.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email já está em uso.");
        }

        if (userRepository.findByUsername(registerRequest.getUsername()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Nome de usuário já está em uso.");
        }

        User newUser = new User();
        newUser.setEmail(registerRequest.getEmail());
        newUser.setUsername(registerRequest.getUsername());
        newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        newUser.setAccountNonExpired(true);
        newUser.setAccountNonLocked(true);
        newUser.isCredentialsNonExpired();
        newUser.setEnabled(true);
        newUser.setRoles(Collections.singletonList(registerRequest.getRole())); // Define o papel com base na requisição
        userRepository.save(newUser);

        TokenDTO tokenDTO = tokenService.createAccessToken(newUser.getUsername(), newUser.getRoles());

        ResponseDTO responseVO = new ResponseDTO(newUser.getUsername(), tokenDTO.getToken());
        return ResponseEntity.ok(responseVO);
    }

    @GetMapping("/users")
    @Operation(summary = "Get user information")
    public List<UserDTO> getUserInfo() {
        return userServices.findAll();
    }


    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser(HttpServletRequest request) {
        return ResponseEntity.ok("Logout realizado com sucesso");
    }
/*

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody EmailDTO emailDTO) {
        // lógica de recuperação de senha
    }

    @PutMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody PasswordResetDTO passwordResetDTO) {
        // lógica de redefinição de senha
    }


 */


}
