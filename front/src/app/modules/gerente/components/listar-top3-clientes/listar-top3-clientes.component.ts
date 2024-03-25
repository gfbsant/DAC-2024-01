import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../../../models/cliente/cliente.model";
import { GerenteService } from "../../../../services/gerente/gerente.service";

@Component({
  selector: 'app-listar-top3-clientes',
  templateUrl: './listar-top3-clientes.component.html',
  styleUrls: ['./listar-top3-clientes.component.css']
})
export class ListarTop3ClientesComponent implements OnInit {
  top3Clientes: Cliente[] = [];

  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
      this.carregarTop3Clientes();
    }

    carregarTop3Clientes(): void {
      this.gerenteService.getTop3ClientesPorSaldo().subscribe({
        next: (clientes) => {
          this.top3Clientes = clientes;
        },
        error: (erro) => {
          console.error('Erro ao carregar os top 3 clientes', erro);
        }
      });
    }

}
