import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClienteModule} from './modules/cliente/cliente.module';
import {BaseLayoutModule} from "./modules/base-layout/base-layout/base-layout.module";
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import {RegistrarComponent} from "./modules/auth/components/autenticacao/registrar/registrar.component";
import {GerenteModule} from "./modules/gerente/gerente.module";
import {CommonModule, registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';
import {NumericDirective} from './shared/directives/numeric.directive';
import {AdministradorModule} from './modules/administrador/administrador.module';
import {
  TransferenciaNewComponent
} from "./modules/cliente/components/transferencia/transferencia-new/transferencia-new.component";
import {EditarPerfilComponent} from "./modules/cliente/components/editar-perfil/editar-perfil.component";
import {AutenticacaoComponent} from "./modules/auth/components/autenticacao/autenticacao.component";
import {ConsultaExtratoComponent} from "./modules/cliente/components/consulta-extrato/consulta-extrato.component";
import {HomeClienteComponent} from "./modules/cliente/components/home-cliente/home-cliente.component";
import {TransferenciaComponent} from "./modules/cliente/components/transferencia/transferencia.component";
import {
  TransferenciaQuantiaComponent
} from "./modules/cliente/components/transferencia/transferencia-quantia/transferencia-quantia.component";
import {
  TransferenciaConfirmComponent
} from "./modules/cliente/components/transferencia/transferencia-confirm/transferencia-confirm.component";
import {
  TransferenciaDoneComponent
} from "./modules/cliente/components/transferencia/transferencia-done/transferencia-done.component";

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    NumericDirective,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ClienteModule,
        BaseLayoutModule,
        NgxMaskDirective,
        FormsModule,
        GerenteModule,
        AdministradorModule,
        CommonModule,
        ReactiveFormsModule,
    ],
  providers: [
    provideNgxMask({},),
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
