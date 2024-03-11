import { Injectable } from '@angular/core';
import {Cliente} from "../../models/cliente/cliente.model";
import {Endereco} from "../../models/endereco/endereco.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    new Cliente(1,
      'John Doe',
      '888.006.769-95',
      'johndoe@gmail.com',
      '(41)99891-0348',
      new Endereco(
        1,
        'Rua das Flores',
        '123',
        'Casa 2',
        'Centro',
        'Curitiba',
        'PR',
        '80000-000'
      ),
      2000.00,
      'password',
      1000.00),
  ];

  constructor() {  }

  getClienteById(id: number): Cliente {
    return <Cliente>this.clientes.find(cliente => cliente.id === id);
  }
}
