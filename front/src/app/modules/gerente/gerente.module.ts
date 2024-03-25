import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGerenteComponent } from './components/home-gerente/home-gerente.component';
import { ModalRecusarCadastroComponent } from './components/modal-recusar-cadastro/modal-recusar-cadastro.component';

@NgModule({
  declarations: [
    HomeGerenteComponent,
    ModalRecusarCadastroComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GerenteModule { }
