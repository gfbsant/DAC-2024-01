import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPerfilComponent } from './modules/cliente/components/editar-perfil/editar-perfil.component';

const routes: Routes = [
  {path:'editar-perfil', component: EditarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
