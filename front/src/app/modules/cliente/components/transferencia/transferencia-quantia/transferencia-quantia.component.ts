import {Component} from '@angular/core';
import {Cliente} from "../../../../../models/cliente/cliente.model";
import {ClienteService} from "../../../../../services/cliente/cliente.service";
import {NumericDirective} from "../../../../../shared/directives/numeric.directive";
import {CurrencyPipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transferencia-quantia',
  templateUrl: './transferencia-quantia.component.html',
  styleUrl: './transferencia-quantia.component.css',
  viewProviders: [NumericDirective, CurrencyPipe]
})
export class TransferenciaQuantiaComponent {
  transferAmount: number = 0;
  transferCents: number = 0;
  invalidTransferAmount: boolean = false;

  constructor(private clienteService: ClienteService, private router: Router ) {
  }

  public get cliente(): Cliente | undefined {
    let cliente = this.clienteService.getClienteById(1);
    return cliente ? cliente : undefined;
  }

  validateTransferAmount() {
    let totalTransfer = this.transferAmount + (this.transferCents / 100);
    if (this.cliente && (totalTransfer > this.cliente.saldo || totalTransfer < 0.01)) {
      this.invalidTransferAmount = true;
    } else {
      this.invalidTransferAmount = false;
    }

  }

  onSubmit() {
    this.router.navigate(['/cliente/transferencia/confirm'])
  }

  onEdit() {
    this.router.navigate(['/cliente/transferencia/new'])
  }
}
