import {Component, ViewChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {Usuario} from "../../../../../models/usuario/usuario.model";
import {Router} from '@angular/router';
import {NgxViacepService} from "@brunoc/ngx-viacep";
import {CurrencyPipe} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NumericDirective} from "../../../../../shared/directives/numeric.directive";
import {AuthService} from "../../../../../services/auth/auth.service";


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css',
  viewProviders: [NumericDirective, CurrencyPipe]
})
export class RegistrarComponent {
  @ViewChild('formRegistro') formRegistro!: NgForm;
  @ViewChild('confirmationModal') confirmationModal: any;
  @ViewChild('logradouroCtrl') logradouroCtrl!: NgModel;
  @ViewChild('cidadeCtrl') cidadeCtrl!: NgModel;
  @ViewChild('ufCtrl') ufCtrl!: NgModel;
  @ViewChild('bairroCtrl') bairroCtrl!: NgModel;

  usuario: Usuario = new Usuario();
  cep: string | null = null;
  logradouro: string | null = null;
  localidade: any;
  bairro: string | null = null;
  uf: string | null = null;
  cepError: string | null = null;
  formattedSalary: string | null;
  salary: number;
  complemento: string | null = null;
  numero: string | null = null;
  cpf: string | null = null;
  telefone: string | null = null;
  private modalRef: any;

  constructor(
    private router: Router,
    private viacep: NgxViacepService,
    private currencyPipe: CurrencyPipe,
    private modalService: NgbModal,
    private authService: AuthService,
  ) {
    this.formattedSalary = 'R$ 0,00';
    this.salary = 0;
  }


  goBack() {
    this.modalRef.close();
    this.router.navigate(['/autenticacao']);
  }


  searchCep(cep: string | null) {
    if (cep != null) {
      this.viacep.buscarPorCep(cep).subscribe((endereco) => {
          this.cep = endereco.cep;
          this.logradouro = endereco.logradouro;
          this.localidade = endereco.localidade;
          this.bairro = endereco.bairro;
          this.uf = endereco.uf;
          this.cepError = null;
          this.logradouroCtrl.control.markAsTouched();
          this.cidadeCtrl.control.markAsTouched();
          this.ufCtrl.control.markAsTouched();
          this.bairroCtrl.control.markAsTouched();
        },
        (error) => {
          this.cepError = 'CEP não encontrado.';
        },
      );
    }
  }

  transformSalary(element: NgModel) {
    if (!this.formattedSalary || this.formattedSalary === 'R$ 0,00') {
      this.formattedSalary = '0';
    }
    this.salary = parseFloat(this.formattedSalary.replace(/[R$\.,]/g, '')) / 100;
    this.formattedSalary = this.currencyPipe.transform(this.salary, 'BRL', true, '1.2-2') || 'R$ 0,00';
  }

  openConfirmationModal() {
    this.modalRef = this.modalService.open(this.confirmationModal, {ariaLabelledBy: 'confirmationModalLabel'});
    this.modalRef.result.then((result: string) => {
      if (result === 'confirm') {
        this.confirmSubmit();
      }
    }, (reason: any) => {
    });
  }


  confirmSubmit() {
    if (this.formRegistro) {
      let registro = this.formRegistro.value;
      registro.salario = this.salary;
      registro.cep = registro.cep.replace(/\D/g, '');

      this.authService.register(registro).subscribe(
        (response: any) => {
          console.log('Usuário registrado com sucesso:', response);
          if (this.modalRef) {
            this.modalRef.close();
          }
          alert('Seu cadastro foi realizado e está aguardando aprovação de um gerente. ' +
            'Você receberá um e-mail quando seu cadastro for aprovado.');
          this.router.navigate(['/autenticacao']);
        },
        (error: any) => {
          console.error('Erro ao registrar usuário:', error);
        },
      );
    } else {
      console.error('formRegistro is not defined');
    }
  }
}
