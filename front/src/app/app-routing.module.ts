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
import {TransferenciaNewComponent} from "./modules/cliente/components/transferencia/transferencia-new/transferencia-new.component";
import {TransferenciaComponent} from "./modules/cliente/components/transferencia/transferencia.component";
import {TransferenciaQuantiaComponent} from "./modules/cliente/components/transferencia/transferencia-quantia/transferencia-quantia.component";
import {TransferenciaConfirmComponent} from "./modules/cliente/components/transferencia/transferencia-confirm/transferencia-confirm.component";
import {TransferenciaDoneComponent} from "./modules/cliente/components/transferencia/transferencia-done/transferencia-done.component";


const routes: Routes = [
  {path: '', redirectTo: '/autenticacao', pathMatch: 'full'},
  {path: 'autenticacao', component: AutenticacaoComponent},
  {path: 'gerente', redirectTo: 'gerente/home-gerente',},
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
  {path: 'cliente/saque', component: SaqueComponent},
  {path: 'administrador/relatorio', component: RelatorioComponent},
  {
    path: 'cliente/transferencia',
    children: [
      {path: '', component: TransferenciaComponent},
      {path: 'quantia', component: TransferenciaQuantiaComponent},
      {path: 'confirm', component: TransferenciaConfirmComponent},
      {path: 'done', component: TransferenciaDoneComponent},
      {path: 'new', component: TransferenciaNewComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
