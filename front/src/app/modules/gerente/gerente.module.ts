import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGerenteComponent } from './components/home-gerente/home-gerente.component';
import { ModalRecusarCadastroComponent } from './components/modal-recusar-cadastro/modal-recusar-cadastro.component';
import { ListarTop3ClientesComponent } from './components/listar-top3-clientes/listar-top3-clientes.component';
import {FormsModule} from "@angular/forms";
import {NgxMaskDirective} from "ngx-mask";
import {ConsultaClienteComponent} from "./components/consulta-cliente/consulta-cliente.component";

@NgModule({
  declarations: [
    HomeGerenteComponent,
    ModalRecusarCadastroComponent,
    ListarTop3ClientesComponent,
    ConsultaClienteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxMaskDirective
  ]
})
export class GerenteModule { }
