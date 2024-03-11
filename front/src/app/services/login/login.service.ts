import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UsuarioService} from "../usuario/usuario.service";
import {Login} from "../../models/login/login.model";
import {Usuario} from "../../models/usuario/usuario.model";

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuario?: Usuario;
  constructor(private usuarioService: UsuarioService) {
  }

  public get usuarioLogado() : Usuario {
    let usuario = localStorage[LS_CHAVE];
    return (usuario ? JSON.parse(usuario) : null);
  }

  public set logarUsuario(usuario : Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  public logout(){
    delete localStorage[LS_CHAVE];
  }

  public login(login: Login): Observable<Usuario | null>{
    let observableUsuario = this.usuarioService.login(login);
    return observableUsuario;
  }

  logarComoCliente() {
    let login: Login = new Login('johndoe@gmail.com', 'password');
    this.login(login).subscribe(user => {
      let usuario: Usuario | null = user ? user : null;
      if (usuario != null) {
        this.logarUsuario = usuario;
      }
    });
  }
}