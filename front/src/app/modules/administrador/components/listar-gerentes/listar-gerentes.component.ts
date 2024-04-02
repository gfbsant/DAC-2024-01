import { Component } from '@angular/core';
import { Gerente } from '../../../../models/gerente/gerente.model';
import { GerenteService } from '../../../../services/gerente/gerente.service';

@Component({
  selector: 'app-listar-gerentes',
  templateUrl: './listar-gerentes.component.html',
  styleUrl: './listar-gerentes.component.css'
})
export class ListarGerentesComponent {
listaGerentes: Gerente[] = [];
  nome: string = '';
  cpf: string = '';
  email: string = '';
  telefone: string = ''

  constructor(
    private gerenteService: GerenteService
  ) { }

  ngOnInit(): void {
      this.carregarGerentes();
  }

  carregarGerentes(): void {
    this.gerenteService.getGerentes().subscribe({
      next: (gerente: Gerente[]) => {
        this.listaGerentes = gerente;
      },
      error: () => {
        console.error('Erro ao carregar os clientes');
      }
    });
  }
}
