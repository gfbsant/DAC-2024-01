package br.com.bantads.ms_gerente.model;


//import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;
//import br.com.bantads.ms_cliente.model.Cliente;


//@Entity
//@Table(name = "gerente")

public class Gerente implements Serializable {
    private int id;
    private String nome;
    private String cpf;
    private String email;
    private String telefone;
    //private List <Cliente> clientes;

public Gerente(){
    super();
}

public Gerente(int id, String nome, String cpf, String email, String telefone) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
}

public int getId() {
    return id;
}

public void setId(int id) {
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

public String getTelefone() {
    return telefone;
}

public void setTelefone(String telefone) {
    this.telefone = telefone;
}

/*
public List getCliente() {
    return Cliente;
}

public void setCliente(List cliente) {
    Cliente = cliente;
}
 */

}