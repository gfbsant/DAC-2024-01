import { Component, ViewChild } from '@angular/core';
import { GerenteService } from '../../../../services/gerente/gerente.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserir-gerente',
  templateUrl: './inserir-gerente.component.html',
  styleUrl: './inserir-gerente.component.css'
})

export class InserirGerenteComponent {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  nome: string = '';
  email: string = '';
  telefone: string = '';
  cpf: string = '';

  constructor(
    private gerenteService: GerenteService,
    private router: Router
  ){} 

  InserirGerente(): void{
    if (this.formPessoa.form.valid){
      this.gerenteService.inserirGerente(this.nome,this.email,this.telefone,this.cpf);
      alert("Gerente adicionado");
      this.router.navigate(['administrador/listar-gerentes']);
    }
  }
}

