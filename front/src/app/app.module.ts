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

import {MatTreeModule} from "@angular/material/tree";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    MatTreeModule
  ],
  providers: [
    provideNgxMask({},),
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    provideAnimationsAsync()
  ],
  exports: [
    NumericDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
