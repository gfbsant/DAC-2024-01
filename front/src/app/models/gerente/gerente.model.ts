import {Cliente} from "../cliente/cliente.model";

export class Gerente {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  clientes: Cliente[];

  constructor(id: number,
              nome: string,
              cpf: string,
              email: string,
              telefone: string,
              clientes: Cliente[]) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.clientes = clientes;
  }
}
