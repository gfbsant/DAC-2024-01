import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.css'
})
export class AutenticacaoComponent {
  isLogin = true;

    constructor() {}

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
