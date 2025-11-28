package com.health.project.virtualvac.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    //aqui são as regras do banco de dados onde o cpf deve ser unico e não pode ser vazio.
    @Column(unique = true, nullable = false)
    private String cpf;
    private String password;
    private String email;
    private String phone;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role = Role.USER; // Padrão: USER

}