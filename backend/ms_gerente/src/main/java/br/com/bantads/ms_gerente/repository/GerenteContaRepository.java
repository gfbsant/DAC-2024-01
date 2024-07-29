package br.com.bantads.ms_gerente.repository;

import br.com.bantads.ms_gerente.model.GerenteConta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface GerenteContaRepository extends JpaRepository<GerenteConta, String> {

    public GerenteConta findById(UUID id);

    public GerenteConta findByNumeroConta(Long numeroConta);
}
