package br.com.bantads.ms_conta.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "conta")
public class Conta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "cliente_conta")
    private Long clienteId;

    @Column(name = "numero_conta", unique = true)
    private String numeroConta;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_criacao_conta")
    private Date dataCriacao;

    @Column(name = "limite_conta")
    private double limite;


    public Conta() {
    }

    public Conta(Long id,Long clienteId, String numeroConta, Date dataCriacao, double limite) {
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

    @Override
    public String toString() {
        return "Conta{" +
                "contaId=" + id +
                "clienteId=" + clienteId +
                ", numeroConta='" + numeroConta + '\'' +
                ", dataCriacao=" + dataCriacao +
                ", limite=" + limite +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Conta)) return false;
        Conta conta = (Conta) o;
        return getClienteId().equals(conta.getClienteId());
    }

    @Override
    public int hashCode() {
        return getClienteId().hashCode();
    }

}