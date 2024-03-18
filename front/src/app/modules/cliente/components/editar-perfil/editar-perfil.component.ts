import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent implements OnInit {

  protected readonly history = history;

  perfil = {
    nome: 'John Doe',
    email:'johndoe@gmail.com',
    telefone: '(41)99891-0348',
    endereco: 'R. Dr. Alcides Vieira Arcoverde, 1225',
    cpf: '888.006.769-95',
    numeroConta: '000014356',
    salario: 2000.00
  };

  constructor(private router: Router) { }

  novoSaldo(): any{
    alert('Novo saldo é: R$'+ (this.perfil.salario/2));
    this.router.navigate(['/tela-inicial'])
  }

  ngOnInit(): void {
  }

}
