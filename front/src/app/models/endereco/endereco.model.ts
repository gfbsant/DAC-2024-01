export class Endereco {
  id: number;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;

  constructor(id: number,
              rua: string,
              numero: string,
              complemento: string,
              bairro: string,
              cidade: string,
              estado: string,
              cep: string) {
    this.id = id;
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }
}
