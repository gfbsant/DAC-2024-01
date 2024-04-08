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
import { RouterModule } from '@angular/router';
import { ExcluirGerenteComponent } from './components/excluir-gerente/excluir-gerente.component';
import { InserirGerenteComponent } from './components/inserir-gerente/inserir-gerente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RelatorioComponent,
    HomeAdministradorComponent,
    ListarGerentesComponent,
    ExcluirGerenteComponent,
    InserirGerenteComponent
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
    MatProgressBar,
    RouterModule,
    FormsModule
  ]
})
export class AdministradorModule { }
