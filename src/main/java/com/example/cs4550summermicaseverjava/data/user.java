package com.example.cs4550summermicaseverjava.data;

import org.apache.catalina.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class user {
    private String username;
    private String password;
 

    @PostMapping("/api/user")
public User createUser
       (@RequestBody User newUser) {
   return newUser;
}

}