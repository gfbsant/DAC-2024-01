package br.com.bantads.ms_conta.dto;

import java.util.Date;

public class ContaDTO {

    private Long id;

    private Long clienteId;

    private String numeroConta;

    private Date dataCriacao;

    private double limite;


    public ContaDTO() {
    }

    public ContaDTO(Long id, Long clienteId, String numeroConta, Date dataCriacao, double limite) {
        this.id = id;
        this.clienteId = clienteId;
        this.numeroConta = numeroConta;
        this.dataCriacao = dataCriacao;
        this.limite = limite;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClienteId() {
        return clienteId;
    }

    public void setClienteId(Long clienteId) {
        this.clienteId = clienteId;
    }

    public String getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(String numeroConta) {
        this.numeroConta = numeroConta;
    }

    public Date getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public double getLimite() {
        return limite;
    }

    public void setLimite(double limite) {
        this.limite = limite;
    }

}