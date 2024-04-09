import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Login} from "../../models/login/login.model";
import {Usuario} from "../../models/usuario/usuario.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[] = [
    new Usuario(1,
      'johndoe@gmail.com',
      'CLIENTE',
      '123456'),
    new Usuario(2,
      'alexmorgan@gmail.com',
      'GERENTE',
      '123456'),
    new Usuario(3,
      'josephlucas@gmail.com',
      'ADMINISTRADOR',
      '123456'),
  ];

  constructor() {
  }

  public getUsuarios(): Observable<Usuario[]> {
    return of(this.usuarios);
  }

  public buscarPorId(id: number): Observable<Usuario | null> {
    const usuario = this.usuarios.find(usuario => usuario.id === id);
    return of(usuario ? usuario : null);
  }

  public inserir(usuario: Usuario) {
    this.usuarios.push(usuario);
    return of(usuario);
  }

  public remover(id: number): Observable<Usuario | null> {
    const index = this.usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
      const [usuario] = this.usuarios.splice(index, 1);
      return of(usuario);
    }
    return of(null);
  }

  public alterar(usuario: Usuario): Observable<Usuario | null> {
    const index = this.usuarios.findIndex(u => u.id === usuario.id);
    if (index !== -1) {
      this.usuarios[index] = usuario;
      return of(usuario);
    }
    return of(null);
  }

  public login(login: Login): Observable<Usuario | null> {
    const usuario = this.usuarios.find(usuario => usuario.email == login.email && usuario.senha == login.senha);
    return of(usuario ? usuario : null);
  }

  register(value: any) {
    return of(value);
  }
}
