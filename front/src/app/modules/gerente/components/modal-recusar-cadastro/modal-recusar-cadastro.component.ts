import { Component, Input } from '@angular/core';
import { Cliente } from '../../../../models/cliente/cliente.model';
import { ClienteService } from '../../../../services/cliente/cliente.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-recusar-cadastro',
  templateUrl: './modal-recusar-cadastro.component.html',
  styleUrl: './modal-recusar-cadastro.component.css'
})
export class ModalRecusarCadastroComponent {
  @Input() cliente!: Cliente;
  constructor(public activeModal: NgbActiveModal,
              private clienteService: ClienteService) {}

  recusarCadastro(cliente: Cliente) {
    this.clienteService.recusarCadastro(cliente);
  }
}
