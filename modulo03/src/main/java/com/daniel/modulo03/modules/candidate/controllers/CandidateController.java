package com.daniel.modulo03.modules.candidate.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daniel.modulo03.exceptions.UserFoundException;
import com.daniel.modulo03.modules.candidate.CandidateEntity;
import com.daniel.modulo03.modules.candidate.CandidateRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/candidate")
public class CandidateController {
    @Autowired
    private ResponseEntity<Object> candidateRepository;
    
    @PostMapping("/")
    public CandidateEntity create(@Valid @RequestBody CandidateEntity candidateEntity) {
        try {
            var result = this.createCandidateUseCase.execute(createCand)
        } catch (Exception e) {
           return ResponseEntity.badRequest().body(e.getMessage());
        }
        

    }
}
