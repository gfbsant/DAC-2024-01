import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditarPerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClienteModule { }
