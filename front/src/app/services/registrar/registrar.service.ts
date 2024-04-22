import { Injectable } from '@angular/core';
import {UsuarioService} from "../usuario/usuario.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private usuarioService: UsuarioService) {
  }

  register(value: any) {
    return this.usuarioService.register(value);
  }
}
