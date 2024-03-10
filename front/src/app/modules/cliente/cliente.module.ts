import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { FormsModule } from '@angular/forms';
import { TelaInicialComponent } from './components/tela-inicial/tela-inicial.component';



@NgModule({
  declarations: [
    EditarPerfilComponent,
    TelaInicialComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClienteModule { }
