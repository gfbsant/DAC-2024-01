import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Transacao } from '../../models/transacao/transacao.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private apiUrl = 'http://suaapi.com/transacoes';

  transactions: Transacao[] = [
    new Transacao(1, 'entrada', 1000, new Date(2023, 0, 1), 'Depósito inicial'),
    new Transacao(2, 'saida', 200, new Date(2023, 0, 15), 'Compra de produto'),
    new Transacao(3, 'entrada', 500, new Date(2023, 0, 20), 'Depósito adicional'),
    new Transacao(4, 'saida', 300, new Date(2023, 0, 25), 'Pagamento de serviço'),
  ];

  constructor() {}

  getTransacoes(clienteId: number, inicio: string, fim: string): Observable<Transacao[]> {
    //return this.http.get<Transacao[]>(`${this.apiUrl}/?clienteId=${clienteId}&inicio=${inicio}&fim=${fim}`);
    return of(this.transactions);
  }
}
