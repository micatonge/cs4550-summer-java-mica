package com.example.cs4550summermicaseverjava.services;

import com.example.cs4550summermicaseverjava.models.User;
import com.example.cs4550summermicaseverjava.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepository repository;
    public User createUser(User user) {
        return repository.save(user);
    }
    public User findUserById(Integer id) {
        return repository.findUserById(id);
    }

    public User findUserByCredentials(String username, String password) {
        return repository.findUserByCredentials(username, password);
    }

    public User findUserByUsername(String username) {
        return repository.findUserByUsername(username);
    }
}