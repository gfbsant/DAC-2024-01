import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditarPerfilComponent} from './modules/cliente/components/editar-perfil/editar-perfil.component';
import {AutenticacaoComponent} from './modules/auth/components/autenticacao/autenticacao.component';
import {RegistrarComponent} from "./modules/auth/components/autenticacao/registrar/registrar.component";
import {ConsultaExtratoComponent} from "./modules/cliente/components/consulta-extrato/consulta-extrato.component";
import {HomeClienteComponent} from "./modules/cliente/components/home-cliente/home-cliente.component";
import {HomeGerenteComponent} from "./modules/gerente/components/home-gerente/home-gerente.component";
import {RelatorioComponent} from './modules/administrador/components/relatorio/relatorio.component';
import {SaqueComponent} from './modules/cliente/components/saque/saque.component';
import {TransferenciaComponent} from "./modules/cliente/components/transferencia/transferencia.component";
import {DepositarComponent} from './modules/cliente/components/depositar/depositar/depositar.component';
import {
  HomeAdministradorComponent
} from "./modules/administrador/components/home-administrador/home-administrador.component";
import { ListarTop3ClientesComponent } from "./modules/gerente/components/listar-top3-clientes/listar-top3-clientes.component";
import {ConsultaClienteComponent} from "./modules/gerente/components/consulta-cliente/consulta-cliente.component";
import {EditarGerenteComponent} from "./modules/gerente/components/editar-gerente/editar-gerente.component";
import { ListarClientesComponent } from './modules/gerente/components/listar-clientes/listar-clientes.component';
import { InserirGerenteComponent } from './modules/gerente/components/inserir-gerente/inserir-gerente.component';
import { ListarGerentesComponent } from './modules/administrador/components/listar-gerentes/listar-gerentes.component';

const AuthRoutes: Routes = [
  {path: '', redirectTo: '/autenticacao', pathMatch: 'full'},
  {path: 'autenticacao', component: AutenticacaoComponent},
  {path: 'registrar', component: RegistrarComponent},
];

const ClienteRoutes: Routes = [
  {path: 'cliente', redirectTo: 'cliente/home-cliente', pathMatch: 'full'},
  {path: 'cliente/transferencia', component: TransferenciaComponent},
  {path: 'cliente/editar-perfil', component: EditarPerfilComponent},
  {path: 'cliente/consulta-extrato', component: ConsultaExtratoComponent},
  {path: 'cliente/saque', component: SaqueComponent},
  {path: 'cliente/home-cliente', component: HomeClienteComponent},
  {path: 'cliente/depositar', component: DepositarComponent}
];

const AdministradorRoutes: Routes = [
  {path: 'administrador', redirectTo: 'administrador/home-administrador', pathMatch: 'full'},
  {path: 'adm', redirectTo: 'administrador/home-administrador', pathMatch: 'full'},
  {path: 'administrador/relatorio', component: RelatorioComponent},
  {path: 'administrador/home-administrador', component: HomeAdministradorComponent},
  {path: 'administrador/editar-gerente', component: EditarGerenteComponent},
  {path: 'administrador/inserir-gerente', component: InserirGerenteComponent},
  {path: 'administrador/listar-gerentes', component: ListarGerentesComponent}
];

const GerenteRoutes: Routes = [
  {path: 'gerente', redirectTo: 'gerente/home-gerente',},
  {path: 'gerente/home-gerente', component: HomeGerenteComponent},
  {path: 'gerente/listar-top3-clientes', component: ListarTop3ClientesComponent},
  {path: 'gerente/consultar-cliente', component: ConsultaClienteComponent},
  {path: 'gerente/listar-clientes', component:ListarClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot([
    ...AuthRoutes,
    ...ClienteRoutes,
    ...AdministradorRoutes,
    ...GerenteRoutes,
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


