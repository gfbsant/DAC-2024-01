
export class Cliente {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  cep: string;
  numero: string;
  complemento: string;
  salario: number;
  senha: string;
  saldo: number;
  situacaoCadastral: 'APROVADO' | 'RECUSADO' | 'PENDENTE' = 'PENDENTE';
  gerente?: string;

  constructor(id: number,
              nome: string,
              cpf: string,
              email: string,
              telefone: string,
              cep: string,
              numero: string,
              complemento: string,
              salario: number,
              senha: string,
              saldo: number,
              situacaoCadastral: 'APROVADO' | 'RECUSADO' | 'PENDENTE' = 'PENDENTE',
              gerente: string) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.cep = cep;
    this.numero = numero;
    this.complemento = complemento;
    this.salario = salario;
    this.senha = senha;
    this.saldo = saldo;
    this.situacaoCadastral = situacaoCadastral;
    this.gerente = gerente;
  }
}
