import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClienteModule} from './modules/cliente/cliente.module';
import {BaseLayoutModule} from "./modules/base-layout/base-layout/base-layout.module";
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import {RegistrarComponent} from "./modules/auth/components/autenticacao/registrar/registrar.component";
import {GerenteModule} from "./modules/gerente/gerente.module";

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClienteModule,
    BaseLayoutModule,
    NgxMaskDirective,
    FormsModule,
    GerenteModule
  ],
  providers: [provideNgxMask({})],
  bootstrap: [AppComponent]
})
export class AppModule {
}
