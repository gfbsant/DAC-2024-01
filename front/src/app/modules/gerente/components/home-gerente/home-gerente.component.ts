import { Component } from '@angular/core';
import {AuthService} from "../../../../services/auth/auth.service";
import {ClienteService} from "../../../../services/cliente/cliente.service";
import {Cliente} from "../../../../models/cliente/cliente.model";

@Component({
  selector: 'app-home-gerente',
  templateUrl: './home-gerente.component.html',
  styleUrl: './home-gerente.component.css'
})
export class HomeGerenteComponent {

  constructor(private loginService: AuthService,
              private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    //login como cliente para mostrar as opções de submenus
    this.loginService.logarComoGerente();
  }

  public get clientesCadastroNegado(): Cliente[] {
    return this.clienteService.getClientesCadastroNegado();
  }

  aprovarCadastro(cliente: Cliente) {
    this.clienteService.aprovarCadastro(cliente);
  }

  recusarCadastro(cliente: Cliente) {
    this.clienteService.recusarCadastro(cliente);
  }
}
