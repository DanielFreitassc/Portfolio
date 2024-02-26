package com.danieel.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/")
public class ModuleTwoController {

     @GetMapping("{id}")
     public String pathParam(@PathVariable String id) {
          return "ID:" + id;
     }

     @GetMapping("/queryParams")
     public String queryParams(@RequestParam String id) {
          return "ID:" + id;
     }
     
     @GetMapping("/queryParams2")
     public String queryParams2(@RequestParam Map<String, String> allParams) {
          return ":" + allParams.entrySet();
     }
    
}
