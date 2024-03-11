import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditarPerfilComponent} from './modules/cliente/components/editar-perfil/editar-perfil.component';
import {AutenticacaoComponent} from './modules/auth/components/autenticacao/autenticacao.component';
import {HomeComponent} from "./modules/cliente/components/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/autenticacao', pathMatch: 'full'},
  {path: 'autenticacao', component: AutenticacaoComponent},
  {path: 'cliente', redirectTo: 'cliente/home'},
  {
    path: 'cliente/home',
    component: HomeComponent,
    /*    canActivate: [authGuard],
        data: {
          role: 'CLIENTE',
        },*/
  },
  {path: 'cliente/editar-perfil', component: EditarPerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
