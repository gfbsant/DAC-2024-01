import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditarPerfilComponent} from './components/editar-perfil/editar-perfil.component';
import {FormsModule} from '@angular/forms';
import {AutenticacaoComponent} from '../auth/components/autenticacao/autenticacao.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {ConsultaExtratoComponent} from './components/consulta-extrato/consulta-extrato.component';
import {HomeClienteComponent} from './components/home-cliente/home-cliente.component';
import {SaqueComponent} from './components/saque/saque.component';
import {TransferenciaNewComponent} from "./components/transferencia/transferencia-new/transferencia-new.component";
import {TransferenciaComponent} from "./components/transferencia/transferencia.component";
import {
  TransferenciaQuantiaComponent
} from "./components/transferencia/transferencia-quantia/transferencia-quantia.component";
import {
  TransferenciaConfirmComponent
} from "./components/transferencia/transferencia-confirm/transferencia-confirm.component";
import {TransferenciaDoneComponent} from "./components/transferencia/transferencia-done/transferencia-done.component";

@NgModule({
  declarations: [
    EditarPerfilComponent,
    AutenticacaoComponent,
    ConsultaExtratoComponent,
    HomeClienteComponent,
    SaqueComponent,
    TransferenciaComponent,
    TransferenciaQuantiaComponent,
    TransferenciaConfirmComponent,
    TransferenciaDoneComponent,
    TransferenciaNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet
  ]
})
export class ClienteModule {
}
