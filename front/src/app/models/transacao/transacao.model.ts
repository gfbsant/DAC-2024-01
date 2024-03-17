export class Transacao {
  id: number;
  tipo: 'entrada' | 'saida';
  valor: number;
  data: Date;
  descricao: string;

  constructor(id: number, tipo: 'entrada' | 'saida', valor: number, data: Date, descricao: string) {
    this.id = id;
    this.tipo = tipo;
    this.valor = valor;
    this.data = data;
    this.descricao = descricao;
  }
}
