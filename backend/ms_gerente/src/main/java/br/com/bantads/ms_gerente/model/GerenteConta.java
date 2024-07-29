package br.com.bantads.ms_gerente.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Table(name = "tb_gerente_contas")
public class GerenteConta {

    @Id
    @Column(name = "id_gerente_conta")
    private UUID id;

    @Column(name = "id_gerente")
    private UUID idGerente;

    @Column(name = "numero_conta")
    private Long numeroConta;

    @Column(name = "saldo_conta")
    private BigDecimal saldoConta;

    public GerenteConta() {
    }

    public GerenteConta(UUID id, UUID idGerente, Long numeroConta, BigDecimal saldoConta) {
        this.id = id;
        this.idGerente = idGerente;
        this.numeroConta = numeroConta;
        this.saldoConta = saldoConta;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getIdGerente() {
        return idGerente;
    }

    public void setIdGerente(UUID idGerente) {
        this.idGerente = idGerente;
    }

    public Long getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(Long numeroConta) {
        this.numeroConta = numeroConta;
    }

    public BigDecimal getSaldoConta() {
        return saldoConta;
    }

    public void setSaldoConta(BigDecimal saldoConta) {
        this.saldoConta = saldoConta;
    }

}
