import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacao } from '../../models/transacao/transacao.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private apiUrl = 'http://suaapi.com/transacoes';

  constructor(private http: HttpClient) { }

  getTransacoes(clienteId: number, inicio: string, fim: string): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.apiUrl}/?clienteId=${clienteId}&inicio=${inicio}&fim=${fim}`);
  }
}
