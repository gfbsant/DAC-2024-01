package br.com.bantads.ms_gerente.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.io.Serializable;
import java.util.UUID;


@Entity
@Table(name = "gerente")

public class Gerente implements Serializable {

    @Id
    @Column(name = "id_gerente")
    private UUID id;

    @Column(name = "nome_gerente")
    private String nome;

    @Column(name = "cpf_gerente")
    private String cpf;

    @Column(name = "email_gerente")
    private String email;

    @Column(name = "quantidade_contas_gerente")
    private int quantidadeContas;

    public Gerente() {
    }

    public Gerente(UUID id, String nome, String cpf, String email, int quantidadeContas) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.quantidadeContas = quantidadeContas;
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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getQuantidadeContas() {
        return quantidadeContas;
    }

    public void setQuantidadeContas(int quantidadeContas) {
        this.quantidadeContas = quantidadeContas;
    }


}