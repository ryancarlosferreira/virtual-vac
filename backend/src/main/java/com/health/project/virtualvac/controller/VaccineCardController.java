package com.health.project.virtualvac.controller;

import com.health.project.virtualvac.dto.VaccineCardRequest;
import com.health.project.virtualvac.model.VaccineCard;
import com.health.project.virtualvac.service.VaccineCardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
 Controller REST:
 - POST /api/vaccine-cards      -> cria novo registro (payload do frontend)
 - GET  /api/vaccine-cards      -> lista todos
 - GET  /api/vaccine-cards/vaccine/{name} -> lista por vacina (usada na tela de detalhes)
*/
@RestController
@RequestMapping("/api/vaccine-card")
public class VaccineCardController {

    private final VaccineCardService service;

    public VaccineCardController(VaccineCardService service) {
        this.service = service;
    }

    // Criar um novo registro de vacina (recebe o DTO do frontend)
    @PostMapping
    public ResponseEntity<VaccineCard> create(@RequestBody VaccineCardRequest req) {
        VaccineCard saved = service.createFromRequest(req);
        return ResponseEntity.status(201).body(saved);
    }

    // Listar todos os registros
    @GetMapping
    public List<VaccineCard> getAll() {
        return service.listAll();
    }

    // Listar por vacina (name)
    @GetMapping("/vaccine/{name}")
    public List<VaccineCard> getByVaccineName(@PathVariable String name) {
        return service.listByVaccineName(name);
    }
}