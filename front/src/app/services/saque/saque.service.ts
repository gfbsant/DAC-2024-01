import { Injectable } from '@angular/core';
import { ClienteService } from '../cliente/cliente.service';
import { ContaService } from '../conta/conta.service';



@Injectable({
  providedIn: 'root'
})

export class SaqueService {

  constructor(
    private clienteService: ClienteService,
    private contaService: ContaService) {

  }

  realizarSaqueSaldo(idCliente: number, valorDesejado: number) {
    let currentCliente = this.clienteService.getClienteById(idCliente);
    return (currentCliente.saldo - valorDesejado);

  }

  realizarSaqueLimite(numeroConta: string, valorDesejado: number) {
    let currentConta = this.contaService.getContaByNumeroConta(numeroConta);
    return (currentConta.limite - valorDesejado);
  }


}


