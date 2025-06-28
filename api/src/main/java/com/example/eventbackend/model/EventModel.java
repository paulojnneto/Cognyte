package com.example.eventbackend.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity @Table(name="events")
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class EventModel {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private BigDecimal price;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        STARTED, COMPLETED, PAUSED
    }
}