import { Transacao } from './transacao.model';

describe('Transacao', () => {
  it('should create an instance', () => {
    expect(new Transacao(
      1,
      'entrada',
      100,
      new Date(),
      'descricao'
    )).toBeTruthy();
  });
});
