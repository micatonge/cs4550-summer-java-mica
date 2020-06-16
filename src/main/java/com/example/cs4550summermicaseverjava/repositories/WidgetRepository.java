package com.example.cs4550summermicaseverjava.repositories;

import com.example.cs4550summermicaseverjava.models.Widget;
import org.springframework.data.repository.CrudRepository;

public interface WidgetRepository
        extends CrudRepository<Widget, Integer> {
}