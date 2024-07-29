package br.com.bantads.ms_commons.dto;

import java.io.Serializable;
import java.util.UUID;

public class GerenteContaDTO implements Serializable {

    private UUID id;
    private UUID idGerente;
    private Long numeroConta;

    public GerenteContaDTO() {
        super();
    }

    public GerenteContaDTO(UUID id, UUID idGerente, Long numeroConta) {
        this.id = id;
        this.idGerente = idGerente;
        this.numeroConta = numeroConta;
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

}
