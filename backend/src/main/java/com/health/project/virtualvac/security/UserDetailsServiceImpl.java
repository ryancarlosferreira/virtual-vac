package com.health.project.virtualvac.security;

import com.health.project.virtualvac.model.User;
import com.health.project.virtualvac.repository.UserRepository;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository repo;

    public UserDetailsServiceImpl(UserRepository repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // tenta cpf primeiro, depois email
        User user = repo.findByCpf(username)
                .or(() -> repo.findByEmail(username))
                .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));

        // Usamos cpf como identificador preferencial no subject do token (ver login)
        String uname = user.getCpf() != null ? user.getCpf() : user.getEmail();
        String pwd = user.getPassword() != null ? user.getPassword() : "";

        return org.springframework.security.core.userdetails.User.withUsername(uname)
                .password(pwd)
                .authorities("ROLE_USER")
                .accountExpired(false).accountLocked(false).credentialsExpired(false).disabled(false)
                .build();
    }
}