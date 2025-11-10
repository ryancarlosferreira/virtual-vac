package com.health.project.virtualvac.repository;

import com.health.project.virtualvac.model.VaccineCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface VaccineCardRepository extends JpaRepository<VaccineCard, Long> {
    List<VaccineCard> findByVaccineNameIgnoreCase(String vaccineName);
}