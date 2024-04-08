import { Component } from '@angular/core';
import { Gerente } from '../../../../models/gerente/gerente.model';
import { GerenteService } from '../../../../services/gerente/gerente.service';
import { AdministradorService } from '../../../../services/administrador/administrador.service';
import { ActivatedRoute } from "@angular/router";
import { Conta } from '../../../../models/conta/conta.model';
import { ContaService } from '../../../../services/conta/conta.service';
import { Cliente } from '../../../../models/cliente/cliente.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-excluir-gerente',
  templateUrl: './excluir-gerente.component.html',
  styleUrl: './excluir-gerente.component.css'
})


export class ExcluirGerenteComponent {

  listaClientes: Cliente[] = [];

  protected readonly history = history;
  gerente: any;
  id: string = "";
  constructor(
    public activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private gerenteService: GerenteService,
    //public activeModal: NgbActiveModal,
  ) {

  }

  ngOnInit(): void {
    /*
    this.id = this.route.snapshot.params['id'];
    this.gerenteService.getGerenteById(+this.id).subscribe(
      gerente => {
        this.gerente = gerente;
      }
    );
      */

  }
/*
  carregarClientesDoGerente(gerente: string): void {
    this.gerenteService.getTodosClientesPorGerente(gerente).subscribe({
      next: (clientes) => {
        this.listaClientes = clientes;
      },
      error: (erro) => {
        console.error('Erro ao carregar os clientes', erro);
      }
    });
  }
*/
  excluirGerente(){

  }
}
