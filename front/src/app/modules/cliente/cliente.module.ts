import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { FormsModule } from '@angular/forms';
import { AutenticacaoComponent } from '../auth/components/autenticacao/autenticacao.component';
import {RouterLink} from "@angular/router";
import { ConsultaExtratoComponent } from './components/consulta-extrato/consulta-extrato.component';
import { HomeClienteComponent } from './components/home-cliente/home-cliente.component';

@NgModule({
  declarations: [
    EditarPerfilComponent,
    AutenticacaoComponent,
    ConsultaExtratoComponent,
    HomeClienteComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterLink
    ]
})
export class ClienteModule { }
