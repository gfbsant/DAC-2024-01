import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { HomeAdministradorComponent } from './components/home-administrador/home-administrador.component';
import {
  MatNestedTreeNode,
  MatTree,
  MatTreeNode,
  MatTreeNodeDef,
  MatTreeNodePadding,
  MatTreeNodeToggle
} from "@angular/material/tree";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatProgressBar} from "@angular/material/progress-bar";
import { ListarGerentesComponent } from './components/listar-gerentes/listar-gerentes.component';



@NgModule({
  declarations: [
    RelatorioComponent,
    HomeAdministradorComponent,
    ListarGerentesComponent
  ],
  imports: [
    CommonModule,
    MatTree,
    MatTreeNode,
    MatNestedTreeNode,
    MatIcon,
    MatTreeNodeToggle,
    MatIconButton,
    MatTreeNodePadding,
    MatTreeNodeDef,
    MatProgressBar
  ]
})
export class AdministradorModule { }
