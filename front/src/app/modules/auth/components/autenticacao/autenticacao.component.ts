import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Login} from "../../../../models/login/login.model";
import {Usuario} from "../../../../models/usuario/usuario.model";
import {LoginService} from "../../../../services/login/login.service";

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.css'
})
export class AutenticacaoComponent {
  isLogin = true;

    constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    //para nao mostrar as opções de submenus
    this.loginService.logout();
  }

    onSubmit(form: NgForm) {
      if (this.isLogin) {
        console.log('Dados de login:', form.value);
      } else {
        console.log('Dados de recuperação de senha:', form.value);
      }
    }

    onSwitchAuthMode() {
      this.isLogin = !this.isLogin;
    }
}
