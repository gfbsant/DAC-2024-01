import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClienteModule } from './modules/cliente/cliente.module';
import {BaseLayoutModule} from "./modules/base-layout/base-layout/base-layout.module";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ClienteModule,
    BaseLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
