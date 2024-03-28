import { Component, Input, Output, ViewChild } from '@angular/core';
import { AuthService } from "../../../../services/auth/auth.service";
import { ClienteService } from "../../../../services/cliente/cliente.service";
import { Cliente } from "../../../../models/cliente/cliente.model";
import { NumericDirective } from '../../../../shared/directives/numeric.directive';
import { CurrencyPipe } from "@angular/common";
import { NgForm, NgModel } from '@angular/forms';
import { SaqueService } from '../../../../services/saque/saque.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Conta } from '../../../../models/conta/conta.model';
import { ContaService } from '../../../../services/conta/conta.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrl: './saque.component.css',
  viewProviders: [NumericDirective, CurrencyPipe]

})
export class SaqueComponent {
  //@Input() valorSaq!: number | string;
  //@Output() 
  @ViewChild('confirmationModal') confirmationModal: any;
  @ViewChild('saldoInsuficienteModal') saldoInsuficienteModal: any;
  @ViewChild('sucessoModal') sucessoModal: any;
  @ViewChild('saqueHTML') formSaque!: NgForm;

  valorSaque: string | null;
  valor: number;
  private modalRef: any;
  resto!: number;
  mensagemSucessoModal: string = "";
  mensagemTopoModal: string = "";

  constructor(
    private loginService: AuthService,
    private currencyPipe: CurrencyPipe,
    private modalService: NgbModal,
    private saqueService: SaqueService,
    private contaService: ContaService,
    private clienteService: ClienteService) {
    
      this.valorSaque = 'R$ 0,00';
    this.valor = 0;


  }

  ngOnInit(): void {
    //login como cliente para mostrar as opções de submenus
    this.loginService.logarComoCliente();
  }

  public get cliente(): Cliente {
    let cliente = this.clienteService.getClienteById(1);
    return cliente;
  }

  public get conta(): Conta{
    let conta = this.contaService.getContaByNumeroConta('0001');
    return conta;
  }

  transformSaque(element: NgModel) {
    if (!this.valorSaque || this.valorSaque === 'R$ 0,00') {
      this.valorSaque = '0';
    }
    this.valor = parseFloat(this.valorSaque.replace(/[R$\.,]/g, '')) / 100;
    this.valorSaque = this.currencyPipe.transform(this.valor, 'BRL', true, '1.2-2') || 'R$ 0,00';
  }

  openConfirmationModal() {
    this.modalRef = this.modalService.open(this.confirmationModal, { ariaLabelledBy: 'confirmationModalLabel' });
    this.modalRef.result.then((result: string) => {
      if (result === 'confirm') {
        this.confirmacaoSacar();
      }
    }, (reason: any) => {
    });
  }
  openSaldoInsuficienteModal(resto: number) {
    this.resto = resto * -1;

    this.modalRef = this.modalService.open(this.saldoInsuficienteModal, { ariaLabelledBy: 'saldoInsuficienteModalLabel' });
    this.modalRef.result.then((result: string) => {

      if (result === 'confirm') {
        this.confirmacaoLimite(resto);
      }
    }, (reason: any) => {
    });
  }
  openSucessoModal() {
    this.modalRef = this.modalService.open(this.sucessoModal, { ariaLabelledBy: 'SucessoModalLabel' });
    this.modalRef.result.then((result: string) => {
      if (result === 'confirm') {
        //this.confirmacaoSacar();
      }
    }, (reason: any) => {
    });
  }

  /*
  testavalor() {
    this.mensagem = String(this.valorSaque);
    this.testavalor2;
  }

  testavalor2() {
    this.ms = this.valor;
  }

  testeAlert() {
    alert("teste alerta")
  }

  testeAlert2() {
    alert("testa alert 2");
  }

  validarvalor() {
    if (this.valor != null) {

      if (this.valor < 110.00) {
        this.mensagem = "menor q 110"
      }
      if (this.valor > 110.00) {
        this.mensagem = "MAIOR q 110"
      }

      if (Number(this.cliente?.saldo) < Number(this.valor)) {
        this.mensagem = "maior q saldo"
      }
      if (Number(this.cliente?.saldo) > Number(this.valor)) {
        this.mensagem = "MENorrr q saldo"
      }
    }
  }
*/
  confirmacaoSacar() {
    if (this.formSaque) {
      let valorDesejado = parseFloat(this.formSaque.value.replace(/[R$\.,]/g, '')) / 100;
      if (this.saqueService.realizarSaqueSaldo(1, valorDesejado) < 0) {
        this.openSaldoInsuficienteModal(this.saqueService.realizarSaqueSaldo(this.cliente.id, valorDesejado));
      }
      else {
        this.mensagemSucessoModal = "Transferencia realizada com sucesso"
        this.mensagemTopoModal = "Sucesso!!!!"
        this.openSucessoModal();
        this.clienteService.retirar(this.saqueService.realizarSaqueSaldo(this.cliente.id, valorDesejado))
      }
    }
  }
  chamaConfirmacaoLimite() {
    this.confirmacaoLimite(this.resto);

  }
  confirmacaoLimite(resto: number) {
    if (this.formSaque) {
      let valorDesejado = resto;
      if (this.saqueService.realizarSaqueLimite("0001", valorDesejado) < 0) {
        this.mensagemTopoModal = "Operação Negada!!!!"
        this.mensagemSucessoModal = "Transferencia NÃO REALIZADA por falta de limite"
        this.openSucessoModal();
      } else {
        this.clienteService.retirar(this.saqueService.realizarSaqueSaldo(this.cliente.id, this.cliente.saldo + valorDesejado))
        this.contaService.retirarLimite(this.saqueService.realizarSaqueLimite('0001', valorDesejado))
        this.mensagemSucessoModal = "Transferencia realizada com sucesso"
        this.mensagemTopoModal = "Sucesso!!!!"
        this.openSucessoModal();
      }
    }
  }
  
}






