import { Cliente } from './cliente.model';

describe('Cliente', () => {
  it('should create an instance', () => {
    expect(new Cliente(
      1,
      'Nome',
      '123.456.789-00',
      'teste@gmail.com',
      '41999887766',
        "1",
        'Rua',
        '123',
      9000,
      'senha',
      1000, 'APROVADO', 'CLIENTE'
    )).toBeTruthy();
  });
});
