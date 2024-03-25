import { Injectable } from '@angular/core';
import {Cliente} from "../../models/cliente/cliente.model";
import {Endereco} from "../../models/endereco/endereco.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() {  }
  getClientes(): Cliente[] {
    return CLIENTES;
  }

  getClienteById(id: number): Cliente {
    return <Cliente>CLIENTES.find(cliente => cliente.id === id);
  }

  getClientesCadastroNegado() {
    return CLIENTES.filter(cliente => cliente.situacaoCadastral === 'PENDENTE');
  }

  aprovarCadastro(cliente: Cliente) {
    cliente.situacaoCadastral = 'APROVADO';
  }

  recusarCadastro(cliente: Cliente) {
    cliente.situacaoCadastral = 'RECUSADO';
  }

  depositar(deposito: number) {
    let currentCliente: Cliente = this.getClienteById(1);
    currentCliente.saldo += deposito;
  }
}

const CLIENTES: Cliente[] = [
  new Cliente(1, 'John Doe', '888.006.769-95', 'johndoe@gmail.com', '(41)99891-0348',
    new Endereco(1, 'Rua das Flores', '123', 'Casa 2', 'Centro', 'Curitiba', 'PR', '80000-000'),
    2000.00, 'password', 1000.00, 'APROVADO'),

  new Cliente(2, 'Jane Smith', '999.007.868-94', 'janesmith@gmail.com', '(42)99882-0459',
    new Endereco(2, 'Avenida Brasil', '234', 'Apto 303', 'Jardim', 'São Paulo', 'SP', '01000-000'),
    3000.00, 'password2', 1500.00),

  new Cliente(3, 'Carlos Silva', '777.005.660-93', 'carlossilva@gmail.com', '(43)99771-0560',
    new Endereco(3, 'Praça da Liberdade', '345', 'Bloco B', 'Savassi', 'Belo Horizonte', 'MG', '30100-000'),
    2500.00, 'password3', 1250.00),

  new Cliente(4, 'Ana Pereira', '666.004.551-92', 'anapereira@gmail.com', '(44)99660-0671',
    new Endereco(4, 'Rua dos Andradas', '456', 'Casa', 'Histórico', 'Porto Alegre', 'RS', '90000-000'),
    2200.00, 'password4', 1100.00),

  new Cliente(5, 'Roberto Carlos', '555.003.442-91', 'robertocarlos@gmail.com', '(45)99551-0782',
    new Endereco(5, 'Rua XV de Novembro', '567', 'Sala 501', 'Centro', 'Florianópolis', 'SC', '88000-000'),
    3200.00, 'password5', 1600.00),

  new Cliente(6, 'Mariana Costa', '444.002.333-90', 'marianacosta@gmail.com', '(46)99442-0893',
    new Endereco(6, 'Avenida Sete de Setembro', '678', 'Cobertura', 'Vitória', 'Salvador', 'BA', '40000-000'),
    2800.00, 'password6', 1400.00),

  new Cliente(7, 'Felipe Martins', '333.001.224-89', 'felipemartins@gmail.com', '(47)99333-0904',
    new Endereco(7, 'Largo do Machado', '789', 'Apto 202', 'Catete', 'Rio de Janeiro', 'RJ', '22200-000'),
    2600.00, 'password7', 1300.00),

  new Cliente(8, 'Luciana Alves', '222.000.115-88', 'lucianaalves@gmail.com', '(48)99224-1015',
    new Endereco(8, 'Rua Grande', '890', 'Loja 3', 'Centro', 'São Luís', 'MA', '65000-000'),
    2400.00, 'password8', 1200.00),

  new Cliente(9, 'Ricardo Oliveira', '111.999.006-87', 'ricardooliveira@gmail.com', '(49)99115-1126',
    new Endereco(9, 'Avenida Paulista', '1234', 'Sala 1100', 'Bela Vista', 'São Paulo', 'SP', '01310-100'),
    3500.00, 'password9', 1750.00),

  new Cliente(10, 'Patricia Lima', '000.888.997-86', 'patricialima@gmail.com', '(50)99006-1237',
    new Endereco(10, 'Rua dos Alfeneiros', '123', 'Casa 4', 'Bairro Novo', 'Recife', 'PE', '50000-000'),
    2100.00, 'password10', 1050.00),
];


