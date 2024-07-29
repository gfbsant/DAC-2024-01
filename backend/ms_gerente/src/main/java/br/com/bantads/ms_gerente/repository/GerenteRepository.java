package br.com.bantads.ms_gerente.repository;

import br.com.bantads.ms_gerente.model.Gerente;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GerenteRepository extends JpaRepository<Gerente, String> {
    public Gerente findById(UUID id);
    public Gerente findByEmail(String email);
}
