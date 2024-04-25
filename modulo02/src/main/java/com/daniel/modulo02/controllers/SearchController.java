package com.daniel.modulo02.controllers;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("home")
public class SearchController {
    
    @GetMapping("dev")
    public String help() {
        return "{\n \"nome\":\"Daniel\",\n \"sobrenome\":\"Freitas\" \n}";
    }

    @GetMapping("{id}")
    public String buscaId(@PathVariable String id) {
        return "ID:" + id;
    }

    @GetMapping("usuario")
    public String montaUser(@RequestParam(value = "id") String id, @RequestParam(value = "name")String name, @RequestParam(value = "sobrenome")String sobrenome) {
        return "{\n \"id\":\"" + id +  "\",\n \"nome\":\"" + name + "\", \n \"sobrenome\":\""+ sobrenome +"\"  \n}";
    }

    @GetMapping("usuario1")
    public String montaUser2(@RequestParam Map<String, String> allParams) {
        return String.format("{\n %s \n}", allParams);
    }
  
}
