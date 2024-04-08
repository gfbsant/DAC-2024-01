package com.bantads.authmicroservice.dto;

import com.bantads.authmicroservice.model.Role;
import com.bantads.authmicroservice.model.enums.ERole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestDTO implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    private String email;
    private String password;
    private String username;
    private String role;
}
