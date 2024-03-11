import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../../../models/usuario/usuario.model";
import {LoginService} from "../../../../services/login/login.service";

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})
export class BaseLayoutComponent {

  constructor(private loginService: LoginService,
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
}
