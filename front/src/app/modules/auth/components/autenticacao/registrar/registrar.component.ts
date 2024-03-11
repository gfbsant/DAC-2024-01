import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Usuario} from "../../../../../models/usuario/usuario.model";
import {UsuarioService} from "../../../../../services/usuario/usuario.service";
import {NgxMaskDirective} from "ngx-mask";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css',
})
export class RegistrarComponent {
  @ViewChild('formPessoa') formRegistro!: NgForm;
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) {}

  onSubmit(form: NgForm) {
    console.log('Dados de registro:', form.value);
  }

}
