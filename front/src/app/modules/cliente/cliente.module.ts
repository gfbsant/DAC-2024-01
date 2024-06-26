import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditarPerfilComponent} from './components/editar-perfil/editar-perfil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AutenticacaoComponent} from '../auth/components/autenticacao/autenticacao.component';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {ConsultaExtratoComponent} from './components/consulta-extrato/consulta-extrato.component';
import {HomeClienteComponent} from './components/home-cliente/home-cliente.component';
import {SaqueComponent} from './components/saque/saque.component';
import {DepositarComponent} from "./components/depositar/depositar/depositar.component";
import {NgxMaskDirective, NgxMaskPipe} from "ngx-mask";
import {TransferenciaComponent} from "./components/transferencia/transferencia.component";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    EditarPerfilComponent,
    AutenticacaoComponent,
    ConsultaExtratoComponent,
    HomeClienteComponent,
    SaqueComponent,
    DepositarComponent,
    TransferenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    NgxMaskDirective,
    ReactiveFormsModule,
    NgxMaskPipe,
    RouterModule
  ]
})
export class ClienteModule {
}
