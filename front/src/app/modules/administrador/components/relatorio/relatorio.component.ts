import { Component } from '@angular/core';
import { ClienteService } from '../../../../services/cliente/cliente.service';
import { Cliente } from '../../../../models/cliente/cliente.model';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrl: './relatorio.component.css'
})
export class RelatorioComponent {
  constructor(private clienteService: ClienteService,
    private loginService: AuthService){
  }

  ngOnInit(): void {
    //this.loginService.logarComoAdministrador();
  }

  public get clientes(): Cliente[] {
    return this.clienteService.getClientes();
  }
}
