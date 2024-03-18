import {Endereco} from "../endereco/endereco.model";

export class Cliente {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  endereco: Endereco;
  salario: number;
  senha: string;
  saldo: number;
  situacaoCadastral: 'APROVADO' | 'RECUSADO' | 'PENDENTE' = 'PENDENTE';

  constructor(id: number,
              nome: string,
              cpf: string,
              email: string,
              telefone: string,
              endereco: Endereco,
              salario: number,
              senha: string,
              saldo: number,
              situacaoCadastral: 'APROVADO' | 'RECUSADO' | 'PENDENTE' = 'PENDENTE') {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.salario = salario;
    this.senha = senha;
    this.saldo = saldo;
    this.situacaoCadastral = situacaoCadastral;
  }
}
