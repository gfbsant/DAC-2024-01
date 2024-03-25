import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGerenteComponent } from './components/home-gerente/home-gerente.component';
import { ModalRecusarCadastroComponent } from './components/modal-recusar-cadastro/modal-recusar-cadastro.component';
import { ListarTop3ClientesComponent } from './components/listar-top3-clientes/listar-top3-clientes.component';

@NgModule({
  declarations: [
    HomeGerenteComponent,
    ModalRecusarCadastroComponent,
    ListarTop3ClientesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GerenteModule { }
