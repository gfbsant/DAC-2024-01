import { Component } from '@angular/core';
import { AuthService } from '../../../../../services/auth/auth.service';
import { ClienteService } from '../../../../../services/cliente/cliente.service';
import { Cliente } from '../../../../../models/cliente/cliente.model';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrl: './depositar.component.css'
})
export class DepositarComponent {
  public deposito: number = 0;

  constructor(private loginService: AuthService,
    private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    //login como cliente para mostrar as opções de submenus
    this.loginService.logarComoCliente();
  }

  public get cliente(): Cliente | undefined {
    let cliente = this.clienteService.getClienteById(1);
    return cliente ? cliente : undefined;
  }

  depositar(deposito: number):void {
    this.clienteService.depositar(deposito);
  }
}
