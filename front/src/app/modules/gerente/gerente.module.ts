import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGerenteComponent } from './components/home-gerente/home-gerente.component';
import { RejeitarClienteComponent } from './components/rejeitar-cliente/rejeitar-cliente.component';



@NgModule({
  declarations: [
    HomeGerenteComponent,
    RejeitarClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GerenteModule { }
