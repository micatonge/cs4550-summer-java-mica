package com.example.cs4550summermicaseverjava.service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
 
public class helloWorldService {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello World";
}
}