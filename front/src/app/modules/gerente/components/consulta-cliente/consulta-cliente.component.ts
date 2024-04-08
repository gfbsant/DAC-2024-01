import {Component} from '@angular/core';
import {Cliente} from "../../../../models/cliente/cliente.model";
import {ClienteService} from "../../../../services/cliente/cliente.service";
import {Conta} from "../../../../models/conta/conta.model";
import {ContaService} from "../../../../services/conta/conta.service";
import {GerenteService} from "../../../../services/gerente/gerente.service";
import {Gerente} from "../../../../models/gerente/gerente.model";
import cep from 'cep-promise';
import {Endereco} from "../../../../models/cliente/endereco/endereco";



@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent {
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
    private gerenteService: GerenteService
  ) {
  }

  consultarCliente(): void {
    this.clienteService.getClienteByCPF(this.cpf).subscribe(resultado => {
      if (resultado) {
        this.cliente = resultado.cliente;
        this.erro = false;

        this.contaService.getContas().subscribe(contas => {
          this.conta = contas.find(conta => conta.clienteId === this.cliente?.id);
          if (this.conta) {
            this.gerenteService.getGerentes().subscribe(gerentes => {
              this.gerente = gerentes.find(gerente => gerente.id === this.conta?.gerenteId);
            });
          }
        });
        cep(this.cliente.cep).then(endereco => {
          this.endereco = endereco;
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
