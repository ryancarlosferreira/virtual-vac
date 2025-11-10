package com.health.project.virtualvac.repository;


import com.health.project.virtualvac.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long > {
    Optional<User> findByEmail(String email);

    // Adiciona procura por CPF. Se sua entidade User não tiver esse campo,
    // remova/ajuste este método conforme a sua model.
    Optional<User> findByCpf(String cpf);
}