package com.bantads.authmicroservice.model;

import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

@Getter
@Setter
public class Role implements GrantedAuthority {
    @Id
    private String id;
    private String description;

    @Override
    public String getAuthority() {
        return this.description;
    }
}
