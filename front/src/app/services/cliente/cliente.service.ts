import { Injectable } from '@angular/core';
import {Cliente} from "../../models/cliente/cliente.model";
import {Observable, of} from "rxjs";
import {Conta} from "../../models/conta/conta.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/clientes';

  private contas: Conta[] = [];

  constructor(private http: HttpClient) {  }
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

  retirar(saque: number){
    let currentCliente: Cliente = this.getClienteById(1);
    currentCliente.saldo = saque;
  }


  getClienteByCPF(cpf: string): Observable<{ cliente: Cliente; conta?: Conta } | undefined> {
    const cpfNormalized = cpf.replace(/[\.\-]/g, '');
    const cliente = CLIENTES.find(cliente => cliente.cpf.replace(/[\.\-]/g, '') === cpfNormalized);
    if (cliente) {
      const conta = this.contas.find(conta => conta.clienteId === cliente.id);
      return of({cliente, conta});
    }
    return of(undefined);
  }
}

const CLIENTES: Cliente[] = [
  new Cliente(1, 'John Doe', '888.006.769-95', 'johndoe@gmail.com', '(41)99891-0348', '78058-539', '123', 'Casa 2', 2000.00, 'password', 1000.00, 'APROVADO', 1),
  new Cliente(2, 'Jane Smith', '999.007.868-94', 'janesmith@gmail.com', '(42)99882-0459', '77001-108', '234', 'Apto 303', 3000.00, 'password2', -1500.00, 'RECUSADO', 1),
  new Cliente(3, 'Carlos Silva', '777.005.660-93', 'carlossilva@gmail.com', '(43)99771-0560', '84270-210', '345', 'Bloco B', 2500.00, 'password3', 1250.00, 'PENDENTE', 1),
  new Cliente(4, 'Ana Pereira', '666.004.551-92', 'anapereira@gmail.com', '(44)99660-0671', '58417-573', '456', 'Casa', 2200.00, 'password4', -1100.00, 'APROVADO', 1),
  new Cliente(5, 'Roberto Carlos', '555.003.442-91', 'robertocarlos@gmail.com', '(45)99551-0782', '61902-035', '567', 'Sala 501', 3200.00, 'password5', 1600.00, 'RECUSADO', 1),
  new Cliente(6, 'Mariana Costa', '444.002.333-90', 'marianacosta@gmail.com', '(46)99442-0893', '83406-110', '678', 'Cobertura', 2800.00, 'password6', -1400.00, 'PENDENTE', 1),
  new Cliente(7, 'Felipe Martins', '333.001.224-89', 'felipemartins@gmail.com', '(47)99333-0904', '89253-550', '789', 'Apto 202', 2600.00, 'password7', 1300.00, 'APROVADO', 2),
  new Cliente(8, 'Luciana Alves', '222.000.115-88', 'lucianaalves@gmail.com', '(48)99224-1015', '58075-030', '890', 'Loja 3', 2400.00, 'password8', -1200.00, 'RECUSADO', 2),
  new Cliente(9, 'Ricardo Oliveira', '111.999.006-87', 'ricardooliveira@gmail.com', '(49)99115-1126', '69088-451', '1234', 'Sala 1100', 3500.00, 'password9', 1750.00, 'PENDENTE', 2),
  new Cliente(10, 'Patricia Lima', '000.888.997-86', 'patricialima@gmail.com', '(50)99006-1237', '72410-120', '123', 'Casa 4', 2100.00, 'password10', -1050.00, 'APROVADO', 2),
];


