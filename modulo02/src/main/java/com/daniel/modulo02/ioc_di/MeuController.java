package com.daniel.modulo02.ioc_di;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("component")
public class MeuController {
    @Autowired
    private MyComponent myComponent;

    @GetMapping("/legacy")
    public String chama() {
        MyComponent myComponent = new MyComponent();
        var resultado = myComponent.chamarComponent();
        return resultado;
    }

    @GetMapping
    public String chamarComponent() {
    return myComponent.chamarComponent();
    }
    
}
