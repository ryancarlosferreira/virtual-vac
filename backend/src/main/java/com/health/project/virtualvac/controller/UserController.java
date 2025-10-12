package com.health.project.virtualvac.controller;

import com.health.project.virtualvac.service.UserService;
import com.health.project.virtualvac.model.User;
import com.health.project.virtualvac.dto.UserRequest;
import com.health.project.virtualvac.dto.LoginRequest;
import com.health.project.virtualvac.dto.LoginResponse;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService service;
    // @Autowired faz isso aqui automaticamente
    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<User> getAll() {
        return service.getAll();
    }

    // Cadastro
    @PostMapping("/register")
    public ResponseEntity<User> register(@Valid @RequestBody UserRequest request) {
        User saved = service.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        boolean authenticated = service.authenticate(request);

        if (authenticated) {
            return ResponseEntity.ok(new LoginResponse("Login realizado com sucesso!"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse("CPF ou senha incorretos!"));
        }
    }
}

