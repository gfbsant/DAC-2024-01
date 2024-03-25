export class Conta {
  clienteId: number;
  numeroConta: string;
  dataCriacao: Date;
  limite: number;
  gerenteId: number;

  constructor(clienteId: number, numeroConta: string, dataCriacao: Date, limite: number, gerenteId: number) {
    this.clienteId = clienteId;
    this.numeroConta = numeroConta;
    this.dataCriacao = dataCriacao;
    this.limite = limite;
    this.gerenteId = gerenteId;
  }

}

