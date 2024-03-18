import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClienteService} from "../../../../services/cliente/cliente.service";
import {Cliente} from "../../../../models/cliente/cliente.model";

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css',
})
export class TransferenciaComponent implements OnInit{
  constructor(private clienteService: ClienteService, private router: Router) { }
  clientes: Cliente[] = [];

  newTransaction() {
    this.router.navigate(['/cliente/transferencia/new']);
  }

  //momentaneamente, o cliente utilizando a lista de clientes para exibicao
  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }
}
