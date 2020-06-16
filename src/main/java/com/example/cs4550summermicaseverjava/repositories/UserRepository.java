package com.example.cs4550summermicaseverjava.repositories;

import com.example.cs4550summermicaseverjava.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository
    extends CrudRepository<User, Integer>
{


    
}