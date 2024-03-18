import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {UsuarioService} from "../usuario/usuario.service";
import {Login} from "../../models/login/login.model";
import {Usuario} from "../../models/usuario/usuario.model";

const LS_CHAVE: string = "usuarioLogado";
const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario?: Usuario;

  constructor(private usuarioService: UsuarioService) {
  }

  public get usuarioLogado(): Usuario {
    let usuario = localStorage[LS_CHAVE];
    return (usuario ? JSON.parse(usuario) : null);
  }

  public set logarUsuario(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  public logout() {
    delete localStorage[LS_CHAVE];
  }

  public login(login: Login): Observable<Usuario | null> {
    let observableUsuario = this.usuarioService.login(login);
    return observableUsuario;
  }

  verifyLogin() {
    let usuario = localStorage[LS_CHAVE];
    if (usuario) {
      delete localStorage[LS_CHAVE];
    }
  }

  logarComoCliente() {
    this.verifyLogin();
    let login: Login = new Login('johndoe@gmail.com', '123456');
    this.login(login).subscribe(user => {
      let usuario: Usuario | null = user ? user : null;
      if (usuario != null) {
        this.logarUsuario = usuario;
      }
    });
  }

  logarComoGerente() {
    this.verifyLogin();
    let login: Login = new Login('alexmorgan@gmail.com', '123456');
    this.login(login).subscribe(user => {
      let usuario: Usuario | null = user ? user : null;
      if (usuario != null) {
        this.logarUsuario = usuario;
      }
    });
  }

  register(value: any) {
     return this.usuarioService.register(value);
  }
}
