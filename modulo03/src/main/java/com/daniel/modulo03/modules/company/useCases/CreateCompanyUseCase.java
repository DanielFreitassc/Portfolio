package com.daniel.modulo03.modules.company.useCases;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.daniel.modulo03.exceptions.UserFoundException;
import com.daniel.modulo03.modules.company.entities.CompanyEntity;
import com.daniel.modulo03.modules.company.repositories.CompanyRepository;

@Service
public class CreateCompanyUseCase {
    
    @Autowired
    private CompanyRepository companyRepository;

    public CompanyEntity execute(CompanyEntity companyEntity) {
        
        this.companyRepository.findByUsernameOrEmail(companyEntity.getUsername(), companyEntity.getEmail())
        .ifPresent((user) -> {
            throw new UserFoundException();
        });
        
        return this.companyRepository.save(companyEntity);

    }
}
