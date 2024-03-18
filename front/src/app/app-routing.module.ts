import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditarPerfilComponent} from './modules/cliente/components/editar-perfil/editar-perfil.component';
import {AutenticacaoComponent} from './modules/auth/components/autenticacao/autenticacao.component';
import {RegistrarComponent} from "./modules/auth/components/autenticacao/registrar/registrar.component";
import {ConsultaExtratoComponent} from "./modules/cliente/components/consulta-extrato/consulta-extrato.component";
import {HomeClienteComponent} from "./modules/cliente/components/home-cliente/home-cliente.component";
import {HomeGerenteComponent} from "./modules/gerente/components/home-gerente/home-gerente.component";

const routes: Routes = [
  {path: '', redirectTo: '/autenticacao', pathMatch: 'full'},
  {path: 'autenticacao', component: AutenticacaoComponent},
  {path: 'gerente', redirectTo: 'gerente/home-gerente', },
  {path: 'cliente', redirectTo: 'cliente/home-cliente'},

  {path: 'registrar', component: RegistrarComponent},
  {
    path: 'cliente/home-cliente',
    component: HomeClienteComponent,
    /*    canActivate: [authGuard],
        data: {
          role: 'CLIENTE',
        },*/
  },
  {path: 'cliente/editar-perfil', component: EditarPerfilComponent},
  {path: 'cliente/consulta-extrato', component: ConsultaExtratoComponent},
  {
    path: 'gerente/home-gerente',
    component: HomeGerenteComponent,
    /*    canActivate: [authGuard],
        data: {
          role: 'CLIENTE',
        },*/
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
