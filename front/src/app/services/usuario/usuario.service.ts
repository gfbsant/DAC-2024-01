import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Login} from "../../models/login/login.model";
import {Usuario} from "../../models/usuario/usuario.model";
import {Endereco} from "../../models/endereco/endereco.model";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[] = [
    new Usuario(1,
      'John Doe',
      'johndoe@gmail.com',
      '123456789',
      'CLIENTE',
      '1234567890',
      new Endereco(
        1,
        'Rua Dr. Alcides Vieira Arcoverde',
        '1225',
        'Casa',
        'Bairro Alto',
        'Curitiba',
        'PR',
        '82820-540'),
      'password'),
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
}
