package br.com.bantads.ms_cliente.dto;

import br.com.bantads.ms_cliente.model.SitucacaoCadastral;

public class ClienteDTO {

    private Long id;

    private String nome;

    private String email;

    private String cpf;

    private String telefone;

    private String cep;

    private String numero;

    private String complemento;

    private double Salario;

    private double Saldo;

    private SitucacaoCadastral situacaoCadastral;

    public ClienteDTO() {
    }

    public ClienteDTO(Long id, String nome, String email, String cpf, String telefone, String cep, String numero, String complemento, double salario, double saldo, SitucacaoCadastral situacaoCadastral) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
        Salario = salario;
        Saldo = saldo;
        this.situacaoCadastral = situacaoCadastral;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public double getSalario() {
        return Salario;
    }

    public void setSalario(double salario) {
        Salario = salario;
    }

    public double getSaldo() {
        return Saldo;
    }

    public void setSaldo(double saldo) {
        Saldo = saldo;
    }

    public SitucacaoCadastral getSituacaoCadastral() {
        return situacaoCadastral;
    }

    public void setSituacaoCadastral(SitucacaoCadastral situacaoCadastral) {
        this.situacaoCadastral = situacaoCadastral;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }
}
