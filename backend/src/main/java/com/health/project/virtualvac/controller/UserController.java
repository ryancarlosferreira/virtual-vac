package com.health.project.virtualvac.controller;

import com.health.project.virtualvac.service.UserService;
import com.health.project.virtualvac.model.User;
import com.health.project.virtualvac.dto.UserRequest;
import com.health.project.virtualvac.dto.LoginRequest;
import com.health.project.virtualvac.dto.LoginResponse;
import com.health.project.virtualvac.security.JwtUtil;
import com.health.project.virtualvac.repository.UserRepository;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.http.ResponseCookie;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService service;
    private final AuthenticationManager authManager;
    private final JwtUtil jwtUtil;
    private final UserRepository userRepo;

    public UserController(UserService service, AuthenticationManager authManager, JwtUtil jwtUtil, UserRepository userRepo) {
        this.service = service;
        this.authManager = authManager;
        this.jwtUtil = jwtUtil;
        this.userRepo = userRepo;
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

    // Login: autentica e seta cookie HttpOnly com JWT (subject = cpf do usuário)
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        try {
            // autentica via AuthenticationManager (UserDetailsService deve existir)
            authManager.authenticate(new UsernamePasswordAuthenticationToken(request.email(), request.password()));

            // busca usuário para obter CPF (subject)
            User user = userRepo.findByEmail(request.email())
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

            String token = jwtUtil.generateToken(user.getCpf());

            ResponseCookie cookie = ResponseCookie.from("token", token)
                    .httpOnly(true)
                    .path("/")
                    .maxAge(24 * 60 * 60)
                    .sameSite("Lax")
                    .build();

            return ResponseEntity.ok().header("Set-Cookie", cookie.toString())
                    .body(new LoginResponse("Login realizado com sucesso!"));
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new LoginResponse("E-mail ou senha incorretos!"));
        }
    }
}