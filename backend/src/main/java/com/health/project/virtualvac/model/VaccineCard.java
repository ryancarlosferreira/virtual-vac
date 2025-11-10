package com.health.project.virtualvac.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vaccine_card")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VaccineCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String cpf;

    @Column(name = "vaccine_name", nullable = false)
    private String vaccineName;

    @Column(nullable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate date;

    @Column(nullable = false, length = 50)
    private String interval;

    @Column(name = "interval_custom", length = 100)
    private String intervalCustom;

    @Column(nullable = false, length = 50)
    private String category;

    @Column(nullable = false, length = 50)
    private String dose;

    @Column(length = 500)
    private String observations;
}
