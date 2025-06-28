package com.example.eventbackend.exception;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String,String>> handleBadReq(IllegalArgumentException ex) {
        return ResponseEntity
            .badRequest()
            .body(Map.of("error", ex.getMessage()));
    }
}