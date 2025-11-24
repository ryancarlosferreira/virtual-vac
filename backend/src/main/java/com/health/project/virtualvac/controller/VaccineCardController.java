package com.health.project.virtualvac.controller;

import com.health.project.virtualvac.dto.VaccineCardRequest;
import com.health.project.virtualvac.model.VaccineCard;
import com.health.project.virtualvac.service.VaccineCardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.security.core.Authentication;

/*
 Controller REST:
 - POST /api/vaccine-card      -> cria novo registro (payload do frontend)
 - GET  /api/vaccine-card      -> lista todos
 - GET  /api/vaccine-card/vaccine/{name} -> lista por vacina (usada na tela de detalhes)
 - GET  /api/vaccine-card/mine -> lista apenas do usuário autenticado
*/
@RestController
@RequestMapping("/api/vaccine-card")
public class VaccineCardController {

    private final VaccineCardService service;

    public VaccineCardController(VaccineCardService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<VaccineCard> create(@RequestBody VaccineCardRequest req) {
        VaccineCard saved = service.createFromRequest(req);
        return ResponseEntity.status(201).body(saved);
    }

    @GetMapping
    public List<VaccineCard> getAll() {
        return service.listAll();
    }

    @GetMapping("/vaccine/{name}")
    public List<VaccineCard> getByVaccineName(@PathVariable String name) {
        return service.listByVaccineName(name);
    }

    // Retorna apenas os cartões do usuário autenticado (subject do token = cpf)
    @GetMapping("/mine")
    public List<VaccineCard> getMine(Authentication auth) {
        String cpf = auth.getName(); // subject do token será o CPF (ver login)
        return service.listByCpf(cpf);
    }
}