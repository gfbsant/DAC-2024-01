import {Injectable} from '@angular/core';
import {Gerente} from '../../models/gerente/gerente.model';
import {Cliente} from "../../models/cliente/cliente.model";
import {ClienteService} from "../cliente/cliente.service";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor(private clienteService: ClienteService) {
  }

  public getGerentes(): Observable<Gerente[]> {
    return of([
      new Gerente(1, 'João', '123.456.789-00', 'joao@bantads.com', '(41)99999-9999',
        this.clienteService.getClientes().slice(0, 3)
      ),
      new Gerente(2, 'Maria', '987.654.321-00', 'maria@bantads.com', '(41)88888-8888',
        this.clienteService.getClientes().slice(3, 4)
      ),
      new Gerente(3, 'José', '456.789.123-00', 'jose@bantads', '(41)77777-7777',
        this.clienteService.getClientes().slice(4, 8)
      ),
      new Gerente(4, 'Ana', '654.321.987-00', 'ana@bantads.com', '(41)66666-6666',
        this.clienteService.getClientes().slice(8, 10)
      ),
    ]);
  }

  getTop3ClientesPorSaldo(): Observable<Cliente[]> {
    return of(this.clienteService.getClientes()
      .filter(cliente => cliente.situacaoCadastral === 'APROVADO')
      .sort((a, b) => b.saldo - a.saldo)
      .slice(0, 3));
  }

  getGerenteById(id: number): Observable<Gerente | undefined> {
    return this.getGerentes().pipe(
      map((gerentes: Gerente[]) => gerentes.find((gerente: Gerente) => gerente.id === id))
    );
  }

  updateGerente(id : number, gerente: any) {
    return of(gerente);
  }

  getTodosClientesPorGerente(idGerente : string): Observable<Cliente[]>{
    return of(this.clienteService.getClientes()
      .filter(cliente => cliente.gerente === idGerente )
      .sort((a, b) => (b.nome > a.nome ? -1 : 1)));
  }

}   
