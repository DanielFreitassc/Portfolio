package com.daniel.modulo02.ioc_di;

import org.springframework.stereotype.Service;

@Service
public class MyComponent {

    public String chamarComponent() {
        return "Chamando meu component";
    }
    
}
