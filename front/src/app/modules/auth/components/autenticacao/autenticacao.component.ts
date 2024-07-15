import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.css'
})
export class AutenticacaoComponent {

  constructor(private loginService: AuthService, private router: Router) {}

  isLogin : boolean = true;

  ngOnInit(): void {
    //para nao mostrar as opções de submenus
    this.loginService.logout();
  }

    onSubmit(form: NgForm) {
      if (this.isLogin) {
        console.log('Dados de login:', form.value);
        this.router.navigate(['cliente/home-cliente'])

      } else {
        console.log('Dados de recuperação de senha:', form.value);
      }
    }

    onSwitchAuthMode() {
      this.isLogin = !this.isLogin;
    }
}
