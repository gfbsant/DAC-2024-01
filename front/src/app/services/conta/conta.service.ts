import {Injectable} from '@angular/core';
import {Conta} from '../../models/conta/conta.model';
import {ClienteService} from '../cliente/cliente.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContaService {
  private contas: Conta[] = [];

  constructor(private clienteService: ClienteService) {
    this.initializeContas();
  }

  getContas(): Observable<Conta[]> {
    return of(this.contas);
  }

  realizarTransferencia(numeroContaOrigem: string, numeroContaDestino: string, valor: number): boolean {
    const contaOrigem = this.contas.find(conta => conta.numeroConta === numeroContaOrigem);
    const contaDestino = this.contas.find(conta => conta.numeroConta === numeroContaDestino);

    if (!contaOrigem || !contaDestino) {
      return false;
    }

    const clienteOrigem = this.clienteService.getClienteById(contaOrigem.clienteId);
    const clienteDestino = this.clienteService.getClienteById(contaDestino.clienteId);

    if (clienteOrigem.saldo < valor) {
      return false;
    }

    clienteOrigem.saldo -= valor;
    clienteDestino.saldo += valor;
    return true;
  }

  private initializeContas(): void {
    const clientes = this.clienteService.getClientes();
    clientes.forEach((cliente, index) => {
      const limite = cliente.salario / 2;
      this.contas.push(new Conta(
        cliente.id,
        `0000${index + 1}`,
        new Date(),
        limite,
        1
      ));
    });
  }

}
