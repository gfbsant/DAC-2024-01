import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { FormsModule } from '@angular/forms';
import { AutenticacaoComponent } from '../auth/components/autenticacao/autenticacao.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    EditarPerfilComponent,
    AutenticacaoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClienteModule { }
