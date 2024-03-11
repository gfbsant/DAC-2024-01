import { Cliente } from './cliente.model';
import {Endereco} from "../endereco/endereco.model";

describe('Cliente', () => {
  it('should create an instance', () => {
    expect(new Cliente(
      1,
      'Nome',
      '123.456.789-00',
      'teste@gmail.com',
      '41999887766',
      new Endereco(
        1,
        'Rua',
        '123',
        'bloco 1 ap 2',
        'Bairro',
        'Cidade',
        'Estado',
        '12345678'
      ),
      9000,
      'senha',
      1000
    )).toBeTruthy();
  });
});
