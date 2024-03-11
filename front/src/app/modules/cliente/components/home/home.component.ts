import {Component} from '@angular/core';
import {LoginService} from "../../../../services/login/login.service";
import {Cliente} from "../../../../models/cliente/cliente.model";
import {ClienteService} from "../../../../services/cliente/cliente.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
