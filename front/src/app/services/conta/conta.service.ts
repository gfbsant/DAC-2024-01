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

  getContaByNumeroConta(numeroConta: string): Conta {
    return <Conta>CONTAS.find(conta => conta.numeroConta === numeroConta);
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

  
  retirarLimite(saque: number){
    let currentConta: Conta = this.getContaByNumeroConta('0001');
    currentConta.limite =+ saque;    
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

const CONTAS: Conta[] = [
  new Conta(1,'0001', new Date(2023,12,31,23,45,30), 5000, 1)
]
//depois calcular o limite certo

/*
  clienteId: number;
  numeroConta: string;
  dataCriacao: Date;
  limite: number;
  gerenteId: number;
*/