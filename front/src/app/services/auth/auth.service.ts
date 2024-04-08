import {Injectable} from '@angular/core';
import {UsuarioService} from "../usuario/usuario.service";
import {Login} from "../../models/login/login.model";
import {Usuario} from "../../models/usuario/usuario.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginResponse} from '../../modules/auth/components/autenticacao/type/login-response.type';
import {tap} from 'rxjs';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_AUTH = 'http://localhost:5000/auth';

  httpOptions = {
    observe: 'response' as 'response',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private usuario?: Usuario;

  constructor(
    private usuarioService: UsuarioService, private http: HttpClient) {
  }

  public get usuarioLogado(): Usuario {
    let usuario = localStorage[LS_CHAVE];
    return (usuario ? JSON.parse(usuario) : null);
  }

  public set logarUsuario(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  public logout() {
    delete
      localStorage
        [LS_CHAVE];
  }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(this.API_AUTH + "/login",
      {email, password}).pipe(
      tap((value: any) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    );
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
    this.login(login.email!, login.senha!).subscribe(user => {
      let usuario: Usuario = user as Usuario;
      if (usuario != null) {
        this.logarUsuario = usuario;
      }
    });
  }

  logarComoGerente() {
    this.verifyLogin();
    let login: Login = new Login('alexmorgan@gmail.com', '123456');
    this.login(login.email!, login.senha!).subscribe(user => {
      let usuario: Usuario = user as Usuario;
      if (usuario != null) {
        this.logarUsuario = usuario;
      }
    });
  }

  logarComoAdministrador() {
    this.verifyLogin();
    let login: Login = new Login('josephlucas@gmail.com', '123456');
    this.login(login.email!, login.senha!).subscribe(user => {
      let usuario: Usuario = user as Usuario;
      if (usuario != null) {
        this.logarUsuario = usuario;
      }
    });
  }

  register(value: any) {
    return this.usuarioService.register(value);
  }
}
