package com.health.project.virtualvac.service;

import com.health.project.virtualvac.model.User;
import com.health.project.virtualvac.repository.UserRepository;
import com.health.project.virtualvac.dto.UserRequest;
import com.health.project.virtualvac.dto.LoginRequest;
import com.health.project.virtualvac.exception.UserNotFoundException;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    // Listar todos os usuários
    public List<User> getAll() {
        return repository.findAll();
    }
    
    // Cadastro com criptografia de senha
    public User register(UserRequest request) {
        User user = new User();
        user.setName(request.name());
        user.setCpf(request.cpf());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setEmail(request.email());
        user.setPhone(request.phone());

        return repository.save(user);
    }

    // Validação de login (Email + senha)
    public boolean authenticate(LoginRequest request) {
        User user = repository.findByEmail(request.email())
                .orElseThrow(() -> new UserNotFoundException("Usuário não encontrado"));

        return passwordEncoder.matches(request.password(), user.getPassword());
    }

    // Deletar usuário por ID
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
