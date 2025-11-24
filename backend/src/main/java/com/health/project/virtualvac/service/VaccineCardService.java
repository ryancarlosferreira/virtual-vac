package com.health.project.virtualvac.service;

import com.health.project.virtualvac.dto.VaccineCardRequest;
import com.health.project.virtualvac.model.VaccineCard;
import com.health.project.virtualvac.repository.VaccineCardRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

/*
 Service responsável por:
 - receber o DTO do frontend,
 - localizar ou criar User e Vaccine,
 - converter a data (dd/MM/yyyy) em LocalDate,
 - calcular nextDoseDate baseado no interval (se for número de dias),
 - persistir o VaccineCard.
*/
@Service
public class VaccineCardService {

    private final VaccineCardRepository cardRepository;

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    public VaccineCardService(VaccineCardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public VaccineCard createFromRequest(VaccineCardRequest req) {
        System.out.println("Recebido DTO: " + req);
        // 1) Parse da data enviada (dd/MM/yyyy)
        LocalDate date = LocalDate.parse(req.date(), formatter);
        
        // 5) Constrói a entidade VaccineCard e salva
        VaccineCard card = new VaccineCard();
        card.setName(req.name());
        card.setCpf(req.cpf());
        card.setVaccineName(req.vaccineName());
        card.setDate(date);
        card.setInterval(req.interval());
        card.setIntervalCustom(req.intervalCustom());
        card.setCategory(req.category());
        card.setDose(req.dose());
        card.setObservations(req.observations());

        return cardRepository.save(card);
    }

    // Lista todos os cartões
    public List<VaccineCard> listAll() {
        return cardRepository.findAll();
    }

    public List<VaccineCard> listByVaccineName(String vaccineName) {
        return cardRepository.findByVaccineNameIgnoreCase(vaccineName);
    }

    public List<VaccineCard> listByCpf(String cpf) {
        return cardRepository.findByCpf(cpf);
    }
}