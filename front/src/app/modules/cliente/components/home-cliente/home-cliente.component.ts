import { Component } from '@angular/core';
import {LoginService} from "../../../../services/login/login.service";
import {ClienteService} from "../../../../services/cliente/cliente.service";
import {Cliente} from "../../../../models/cliente/cliente.model";

@Component({
  selector: 'app-home-cliente',
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeClienteComponent {
  constructor(private loginService: LoginService,
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
}
