import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.css'
})
export class AutenticacaoComponent {

  constructor(private loginService: AuthService) {
  }

  isLogin: boolean = true;

  ngOnInit(): void {
    //para nao mostrar as opções de submenus
    this.loginService.logout();
  }

  onSubmit(form: NgForm) {
    if (this.isLogin) {
      console.log('Dados de login:', form.value);
      this.login(form.value.email, form.value.password);
    } else {
      console.log('Dados de recuperação de senha:', form.value);
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

  login(email: string, senha: string) {
    this.loginService.login(email, senha).subscribe(
      response => {
        sessionStorage.setItem("role", response.role);
      },
      error => {
      }
    );
  }
}
