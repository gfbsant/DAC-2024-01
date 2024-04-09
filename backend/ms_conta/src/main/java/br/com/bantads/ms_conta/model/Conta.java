package br.com.bantads.ms_conta.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "conta")
public class Conta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long clienteId;

    @Column(name = "numero_conta", unique = true)
    private String numeroConta;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_criacao")
    private Date dataCriacao;

    @Column(name = "limite")
    private double limite;

    @Column(name = "gerente_id")
    private Long gerenteId;

    @OneToOne
    @JoinColumn(name = "cliente_id", referencedColumnName = "id")
    private Cliente cliente;

    public Conta() {
    }

    public Conta(Long clienteId, String numeroConta, Date dataCriacao, double limite, Long gerenteId, Cliente cliente) {
        this.clienteId = clienteId;
        this.numeroConta = numeroConta;
        this.dataCriacao = dataCriacao;
        this.limite = limite;
        this.gerenteId = gerenteId;
        this.cliente = cliente;
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

    public Long getGerenteId() {
        return gerenteId;
    }

    public void setGerenteId(Long gerenteId) {
        this.gerenteId = gerenteId;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    @Override
    public String toString() {
        return "Conta{" +
                "clienteId=" + clienteId +
                ", numeroConta='" + numeroConta + '\'' +
                ", dataCriacao=" + dataCriacao +
                ", limite=" + limite +
                ", gerenteId=" + gerenteId +
                ", cliente=" + cliente +
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