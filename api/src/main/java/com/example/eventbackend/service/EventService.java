package com.example.eventbackend.service;

import com.example.eventbackend.model.EventModel;
import com.example.eventbackend.repository.EventRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {
    private final EventRepository repo;
    public EventService(EventRepository repo) { this.repo = repo; }

    public EventModel create(EventModel e) {
        validateDates(e);
        return repo.save(e);
    }

    public List<EventModel> listAll() {
        return repo.findAll();
    }
    public Optional<EventModel> findById(Long id) {
        return repo.findById(id);
    }

    public EventModel update(Long id, EventModel e) {
        EventModel existing = repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Evento não encontrado"));
        validateDates(e);
        existing.setTitle(e.getTitle());
        existing.setStartDate(e.getStartDate());
        existing.setEndDate(e.getEndDate());
        existing.setPrice(e.getPrice());
        existing.setStatus(e.getStatus());
        return repo.save(existing);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    private void validateDates(EventModel e) {
        if (e.getEndDate().isBefore(e.getStartDate())) {
            throw new IllegalArgumentException("endDate deve ser após startDate");
        }
    }
}