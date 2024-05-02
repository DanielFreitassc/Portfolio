package com.daniel.modulo03.modules.company.entities;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Entity
@Data
public class CompanyEntity {
    
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotBlank
    @Pattern(regexp = "\\S+", message = "O campo [username] não deve conter espaços")
    private String username;

    @Email(message = "O campo [email] deve conter um email válido")
    private String email;
    @Length(min = 10, max = 100, message = "A senha deve conter entre (10) e (100) caracteres")
    private String password;
    private String website;
    private String name;
    private String description;

    @CreationTimestamp
    private LocalDateTime createdAt;
    
}
