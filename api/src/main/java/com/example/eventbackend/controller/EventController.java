package com.example.eventbackend.controller;

import com.example.eventbackend.model.EventModel;
import com.example.eventbackend.service.EventService;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {
    private final EventService service;
    public EventController(EventService service) { this.service = service; }

    @PostMapping
    public ResponseEntity<EventModel> create(@RequestBody EventModel e) {
        EventModel created = service.create(e);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @GetMapping
    public List<EventModel> list() {
        return service.listAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<EventModel> update(@PathVariable Long id, @RequestBody EventModel e) {
        EventModel updated = service.update(id, e);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}