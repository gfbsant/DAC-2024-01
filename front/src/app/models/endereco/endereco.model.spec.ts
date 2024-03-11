import { Endereco } from './endereco.model';

describe('Endereco', () => {
  it('should create an instance', () => {
    expect(new Endereco(
      1,
      'Rua',
      '123',
      'bloco 1 ap 2',
      'Bairro',
      'Cidade',
      'Estado',
      '12345678'
    )).toBeTruthy();
  });
});
