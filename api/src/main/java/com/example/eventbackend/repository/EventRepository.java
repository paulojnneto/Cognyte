package com.example.eventbackend.repository;

import com.example.eventbackend.model.EventModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<EventModel, Long> {}