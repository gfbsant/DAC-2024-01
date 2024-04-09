import { Gerente } from './gerente.model';

describe('Gerente', () => {
  it('should create an instance', () => {
    expect(new Gerente(
      1,
      'Nome',
      '123.456.789-00',
      'gerente@gmail.com',
      '41999887766',
      []
    )).toBeTruthy();
  });
});
