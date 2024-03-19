import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, NgModel, Validators} from "@angular/forms";
import {Usuario} from "../../../../../models/usuario/usuario.model";
import {Router} from '@angular/router';
import {CurrencyPipe} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NumericDirective} from "../../../../../shared/directives/numeric.directive";
import {AuthService} from "../../../../../services/auth/auth.service";
import {BuscaCepService} from "../../../../../services/buscacep/busca-cep.service";


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
  formattedSalario: string | null;
  salario: number;
  complemento: string | null = null;
  numero: string | null = null;
  cpf: string | null = null;
  telefone: string | null = null;
  private modalRef: any;


  constructor(
    private router: Router,
    private currencyPipe: CurrencyPipe,
    private modalService: NgbModal,
    private authService: AuthService,
    private buscaCep: BuscaCepService,
  ) {
    this.formattedSalario = 'R$ 0,00';
    this.salario = 0;
  }

  goBack() {
    this.modalRef.close();
    this.router.navigate(['/autenticacao']);
  }

  async searchCep() {
    if (this.formRegistro.form.get('cep')!.valid) {
      try {
        const cep = this.formRegistro.form.get('cep')!.value;
        const resultado = await this.buscaCep.buscaCep(cep);
        this.cepError = null;
        this.formRegistro.form.patchValue({
          logradouro: resultado.street,
          bairro: resultado.neighborhood,
          localidade: resultado.city,
          uf: resultado.state
        });
        this.formRegistro.form.get('logradouro')!.enable();
      } catch (error) {
        this.cepError = 'CEP não encontrado';
        console.error(error);
      }
      this.cepError = null;
      this.logradouroCtrl.control.markAsTouched();
      this.cidadeCtrl.control.markAsTouched();
      this.ufCtrl.control.markAsTouched();
      this.bairroCtrl.control.markAsTouched();
    }
  }


  transformSalary(element: NgModel) {
    if (!this.formattedSalario || this.formattedSalario === 'R$ 0,00') {
      this.formattedSalario = '0';
    }
    this.salario = parseFloat(this.formattedSalario.replace(/[R$\.,]/g, '')) / 100;
    this.formattedSalario = this.currencyPipe.transform(this.salario, 'BRL', true, '1.2-2') || 'R$ 0,00';
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
      registro.salario = this.salario;
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
