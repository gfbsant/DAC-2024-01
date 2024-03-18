import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../../../models/usuario/usuario.model";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})
export class BaseLayoutComponent {

  constructor(private loginService: AuthService,
              private router: Router,
              route: ActivatedRoute) {
  };

  public get usuario() : Usuario | undefined {
    return this.loginService.usuarioLogado;
  }

  public logout(): void{
    this.loginService.logout();
    this.router.navigate(['/autenticacao']);
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }

  goHome() {
    this.router.navigate(['/cliente/home']);
  };

  goAlterarPerfil() {
    this.router.navigate(['/cliente/editar-perfil']);
  };

  goDepositar() {
    this.router.navigate(['/cliente/depositar']);
  };

  goSaque() {
    this.router.navigate(['/cliente/saque']);
  };

  goTransferencia() {
    this.router.navigate(['/cliente/transferencia']);
  };

  goConsultaExtrato() {
    this.router.navigate(['/cliente/consulta-extrato']);
  };

  getUsuarioPerfil() : string | any[] | null | undefined {
    switch (this.usuario?.perfil) {
      case 'ADMINISTRADOR':
        return '/administrador';
      case 'CLIENTE':
        return '/cliente';
      case 'GERENTE':
        return '/gerente';
      default:
        return '/login';
    }
  }

  goConsultarCliente() {
    this.router.navigate([this.getUsuarioPerfil(), '/gerente/consultar-cliente']);
  }

  goListarClientes() {
    this.router.navigate([this.getUsuarioPerfil(), '/gerente/listar-clientes']);
  }

  goListarTop3Clientes() {
    this.router.navigate([this.getUsuarioPerfil(), '/gerente/listar-top3-clientes']);
  }
}
