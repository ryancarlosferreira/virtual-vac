package com.health.project.virtualvac.dto;

// DTO simples que representa o payload enviado pelo frontend.
// Mantemos os mesmos nomes que o formulário envia (date em DD/MM/YYYY).
public record VaccineCardRequest(
    String name,
    String cpf,
    String date,          // formato esperado: dd/MM/yyyy
    String vaccineName,
    String interval,
    String intervalCustom,
    String category,
    String dose,
    String observations
) {}