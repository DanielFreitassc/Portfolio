package com.danielfreitas.gestao_vagas.modules.candidate.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danielfreitas.gestao_vagas.modules.candidate.models.CandidateEntity;

import jakarta.validation.Valid;

@RestController
@RequestMapping("candidate")
public class CandidateController {
    
    @PostMapping
    public void create(@RequestBody @Valid CandidateEntity candidateEntity) {
        System.out.println("Candidado");
        System.out.println(candidateEntity.getEmail());
        
    }
}
