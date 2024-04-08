import {Component} from '@angular/core';
import {Cliente} from '../../../../models/cliente/cliente.model';
import {GerenteService} from '../../../../services/gerente/gerente.service';
import {ClienteService} from "../../../../services/cliente/cliente.service";
import {ContaService} from "../../../../services/conta/conta.service";
import {Conta} from "../../../../models/conta/conta.model";
import {Gerente} from "../../../../models/gerente/gerente.model";
import cep from 'cep-promise';
import {Endereco} from "../../../../models/cliente/endereco/endereco";


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrl: './listar-clientes.component.css',
})

export class ListarClientesComponent {
  listaClientes: Cliente[] = [];
  cpf: string = '';
  cliente?: Cliente;
  erro: boolean = false;
  conta?: Conta;
  gerente?: Gerente;
  exibirDadosConta: boolean = false;
  endereco?: Endereco;


  constructor(
    private clienteService: ClienteService,
    private contaService: ContaService,
    private gerenteService: GerenteService,
    //private consultaCliente: ConsultaClienteComponent
  ) { }

  ngOnInit(): void {
    /*
    this.gerenteService.getGerenteById(1).subscribe({
      this.gerente
    })
    */

    this.carregarClientesDoGerente("João");
    ///nome do gerente inserido a força

  }

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
  consultarCliente(cpf: string): void {
    this.clienteService.getClienteByCPF(cpf).subscribe(resultado => {
      if (resultado) {
        this.cliente = resultado.cliente;
        this.erro = false;
        cep(this.cliente.cep).then(endereco => {
          this.endereco = endereco;
        });
        this.contaService.getContas().subscribe(contas => {
          this.conta = contas.find(conta => conta.clienteId === this.cliente?.id);
          if (this.conta) {
            this.gerenteService.getGerentes().subscribe(gerentes => {
              this.gerente = gerentes.find(gerente => gerente.id === this.conta?.gerenteId);
            });
          }
        });
      } else {
        this.erro = true;
        this.cliente = undefined;
        this.conta = undefined;


      }
    });
  }

  mostrarDadosDoCliente(): void {
    this.exibirDadosConta = false;
  }

  mostrarDadosDaConta(): void {
    this.exibirDadosConta = true;
  }


}
