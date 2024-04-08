package br.com.bantads.ms_conta.repository;

import br.com.bantads.ms_conta.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContaRepository extends JpaRepository<Conta, Long> {

    Optional<Conta> findByNumeroConta(String numeroConta);

    Optional<Conta> findByClienteId(Long clienteId);

}