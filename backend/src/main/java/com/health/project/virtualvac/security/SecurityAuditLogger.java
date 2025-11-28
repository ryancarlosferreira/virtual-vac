package com.health.project.virtualvac.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class SecurityAuditLogger {

    private static final Logger logger = LoggerFactory.getLogger(SecurityAuditLogger.class);

    public void logLoginAttempt(String cpf, boolean success) {
        if (success) {
            logger.info("Login bem-sucedido: CPF={}", maskCpf(cpf));
        } else {
            logger.warn("Tentativa de login falha: CPF={}", maskCpf(cpf));
        }
    }

    public void logUnauthorizedAccess(String path, String ip) {
        logger.warn("Acesso não autorizado: Path={}, IP={}", path, ip);
    }

    public void logRateLimitExceeded(String ip) {
        logger.warn("Rate limit excedido: IP={}", ip);
    }

    private String maskCpf(String cpf) {
        if (cpf == null || cpf.length() < 4) return "***";
        return "***" + cpf.substring(cpf.length() - 3);
    }
}
