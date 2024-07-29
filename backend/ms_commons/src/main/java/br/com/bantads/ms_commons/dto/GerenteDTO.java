package br.com.bantads.ms_commons.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.UUID;

public class GerenteDTO implements Serializable {
    private UUID id;
    private String nome;
    private String email;
    private String cpf;
    private int quantidadeContas;

    private BigDecimal somaSaldosPositivos;
    private BigDecimal somaSaldosNegativos;

    public GerenteDTO() {
        super();
    }

    public GerenteDTO(UUID id, String nome, String email, String cpf, int quantidadeContas, BigDecimal somaSaldosPositivos, BigDecimal somaSaldosNegativos) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.quantidadeContas = quantidadeContas;
        this.somaSaldosPositivos = somaSaldosPositivos;
        this.somaSaldosNegativos = somaSaldosNegativos;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public int getQuantidadeContas() {
        return quantidadeContas;
    }

    public void setQuantidadeContas(int quantidadeContas) {
        this.quantidadeContas = quantidadeContas;
    }

    public BigDecimal getSomaSaldosPositivos() {
        return somaSaldosPositivos;
    }

    public void setSomaSaldosPositivos(BigDecimal somaSaldosPositivos) {
        this.somaSaldosPositivos = somaSaldosPositivos;
    }

    public BigDecimal getSomaSaldosNegativos() {
        return somaSaldosNegativos;
    }

    public void setSomaSaldosNegativos(BigDecimal somaSaldosNegativos) {
        this.somaSaldosNegativos = somaSaldosNegativos;
    }

}
