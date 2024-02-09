package com.danielfreitas.gestao_vagas.modules.candidate.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danielfreitas.gestao_vagas.modules.candidate.models.CandidateEntity;
import com.danielfreitas.gestao_vagas.modules.candidate.repositories.CandidateRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("candidate")
public class CandidateController {
    @Autowired
    private CandidateRepository candidateRepository;

    @PostMapping
    public CandidateEntity create(@RequestBody @Valid CandidateEntity candidateEntity) {
      return this.candidateRepository.save(candidateEntity);
        
    }
}
