import {TransferenciaService} from "../../../../services/transferencia/transferencia.service";
import {Component, OnInit, ViewChild} from "@angular/core";
import {ClienteService} from "../../../../services/cliente/cliente.service";
import {Cliente} from "../../../../models/cliente/cliente.model";
import {CurrencyPipe} from "@angular/common";
import {NumericDirective} from "../../../../shared/directives/numeric.directive";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Conta} from "../../../../models/conta/conta.model";
import {ContaService} from "../../../../services/conta/conta.service";

enum TransferSteps {
  SelectAccount,
  EnterAmount,
  ConfirmDetails,
  Done
}

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css',
  viewProviders: [NumericDirective, CurrencyPipe],
})

export class TransferenciaComponent implements OnInit {
  @ViewChild('destinatarioModal') destinatarioModal: any;

  transferForm!: FormGroup;
  TransferSteps = TransferSteps;
  currentStep = TransferSteps.SelectAccount;
  transferDate: string;
  formattedTransferAmount: string | null = null;
  accountNotFoundError: boolean = false;
  saldoInsuficienteError: boolean = false;
  transferenciaData = {
    valor: '',
    contaDestino: {
      nome: '',
      cpf: '',
      numeroConta: '',
    },
    dadosGerente: {
      nome: '',
      cpf: ''
    },
  };
  clientes: Cliente[] = [];
  transferAmount: number = 0;
  invalidTransferAmount: boolean = false;
  contas: Conta[] = [];


  constructor(
    private transferenciaService: TransferenciaService,
    private clienteService: ClienteService, private contaService: ContaService,
    private currencyPipe: CurrencyPipe, private fb: FormBuilder, private modalService: NgbModal
  ) {
    const date = new Date();
    this.transferDate = date.toLocaleString('pt-BR', {timeZone: 'America/Sao_Paulo'});
    this.formattedTransferAmount = 'R$ 0,00';
  }

  public get cliente(): Cliente | undefined {
    let cliente = this.clienteService.getClienteById(1);
    return cliente ? cliente : undefined;
  }

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
    this.transferForm = this.fb.group({
      accountNumberDigit: ['', [Validators.required, Validators.minLength(5)]],
    });
    this.contaService.getContas().subscribe(contas => {
      this.contas = contas;
    });
    this.transferForm.get('accountNumberDigit')!.valueChanges.subscribe(value => {
      this.accountNotFoundError = false;
    });
  }

  abrirModalDestinatario() {
    const modalRef = this.modalService.open(this.destinatarioModal, {centered: true});
    modalRef.closed.subscribe(() => {
      if (!this.accountNotFoundError) {
        this.advanceStep();
      }
    });
  }

  confirmarConta() {
    this.modalService.dismissAll();
    this.advanceStep();
  }

  escolherOutraConta() {
    this.modalService.dismissAll();
    this.currentStep = TransferSteps.SelectAccount;
  }

  advanceStep() {
    if (this.currentStep < TransferSteps.Done) {
      this.currentStep++;
    }
  }

  retreatStep() {
    if (this.currentStep > TransferSteps.SelectAccount) {
      this.currentStep--;
    }
  }

  verificarContaExistente(numeroConta: string): Conta | null {
    return this.contas.find((conta: { numeroConta: string; }) => conta.numeroConta === numeroConta) || null;
  }


  onAmountChange(event ?: any): boolean {
    if (event) {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
    }
    if (this.formattedTransferAmount != null) {
      if (!this.formattedTransferAmount.startsWith('R$')) {
        this.formattedTransferAmount = 'R$ ' + this.formattedTransferAmount;
      }

      let pureNumber = this.formattedTransferAmount.replace(/\D/g, '');
      pureNumber = pureNumber.padStart(3, '0');

      const integerPart = pureNumber.slice(0, -2);
      const decimalPart = pureNumber.slice(-2);

      this.transferAmount = parseInt(integerPart) + parseInt(decimalPart) / 100;
      this.invalidTransferAmount = this.transferAmount <= 0;

      this.formattedTransferAmount = this.currencyPipe.transform(this.transferAmount, 'BRL', true, '1.2-2') || 'R$ 0,00';
      return true;
    }
    return false;
  }

  validateNumber(event: KeyboardEvent): void {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight'];

    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  verificarValorEAvancar() {
    const valorTransferencia = this.transferAmount;
    const clienteOrigem = this.cliente;

    if (clienteOrigem && valorTransferencia > clienteOrigem.saldo) {
      this.saldoInsuficienteError = true;
    } else {
      this.saldoInsuficienteError = false;
      this.advanceStep();
    }
  }

  verificarEAvancar() {
    const numeroConta = this.transferForm.get('accountNumberDigit')?.value;
    if (!numeroConta) {
      console.error('Número da conta está vazio.');
      return;
    }

    this.contaService.getContas().subscribe(contas => {
      const contaExistente = contas.find(conta => conta.numeroConta === numeroConta);
      if (contaExistente) {
        const cliente = this.clienteService.getClienteById(contaExistente.clienteId);
        if (cliente) {
          this.transferenciaData.contaDestino.nome = cliente.nome;
          this.transferenciaData.contaDestino.cpf = cliente.cpf;
          this.transferenciaData.contaDestino.numeroConta = contaExistente.numeroConta;

          this.accountNotFoundError = false;
          this.abrirModalDestinatario();
        } else {
          console.error('Cliente não encontrado para a conta.');
          this.accountNotFoundError = true;
        }
      } else {
        console.error('Conta não encontrada.');
        this.accountNotFoundError = true;
      }
    });
  }


}
