import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';import {FlatTreeControl, NestedTreeControl} from "@angular/cdk/tree";
import {CollectionViewer, DataSource, SelectionChange} from "@angular/cdk/collections";
import { BehaviorSubject, merge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from "../../../../services/auth/auth.service";
import {GerenteService} from "../../../../services/gerente/gerente.service";

export class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = false,
  ) {}
}

@Injectable({providedIn: 'root'})
export class DynamicDatabase {
  dataMap = new BehaviorSubject<Map<string, {numClients: number, sumPositive: number, sumNegative: number}>>(new Map());

  constructor(private gerenteService: GerenteService) {
    this.gerenteService.getGerentes().subscribe(gerentes => {
      const map = new Map();
      gerentes.forEach(gerente => {
        const numClients = gerente.clientes.length;
        let sumPositive = 0;
        let sumNegative = 0;
        gerente.clientes.forEach(cliente => {
          if (cliente.saldo > 0) {
            sumPositive += cliente.saldo;
          } else {
            sumNegative += cliente.saldo;
          }
        });
        map.set(gerente.nome, {numClients, sumPositive, sumNegative});
      });
      this.dataMap.next(map);
    });
  }

  get rootLevelNodes(): Observable<string[]> {
    return this.dataMap.pipe(map(dataMap => Array.from(dataMap.keys())));
  }

  initialData(): Observable<DynamicFlatNode[]> {
    return this.rootLevelNodes.pipe(
      map(names => names.map(name => new DynamicFlatNode(name, 0, true)))
    );
  }

  getChildren(node: string): Observable<{ numClients: number; sumPositive: number; sumNegative: number } | undefined> {
    return this.dataMap.pipe(
      map(dataMap => dataMap.get(node))
    );
  }


}

export class DynamicDataSource implements DataSource<DynamicFlatNode> {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private _treeControl: FlatTreeControl<DynamicFlatNode>,
    private _database: DynamicDatabase,
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if (
        (change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  disconnect(collectionViewer: CollectionViewer): void {}

  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  toggleNode(node: DynamicFlatNode, expand: boolean) {
    this._database.getChildren(node.item).subscribe(data => {
      const index = this.data.indexOf(node);
      if (!data || index < 0) {
        return;
      }
      node.isLoading = true;
      setTimeout(() => {
        if (expand) {
          const newNode = new DynamicFlatNode(
            `Numero de Clientes: ${data.numClients}<br/>Soma de saldos positivos: R$ ${data.sumPositive},00<br/>Soma de saldos negativos: R$ ${data.sumNegative},00`
              .replace(/\n/g, '<br/>'),
            node.level + 1,
            false
          );
          this.data.splice(index + 1, 0, newNode);
        } else {
          let count = 0;
          for (
            let i = index + 1;
            i < this.data.length && this.data[i].level > node.level;
            i++, count++
          ) {}
          this.data.splice(index + 1, count);
        }
        this.dataChange.next(this.data);
        node.isLoading = false;
      }, 600);
    });
  }
}


@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrl: './home-administrador.component.css'
})
export class HomeAdministradorComponent {

  ngOnInit(): void {
    this.loginService.logarComoAdministrador();
  }

  constructor(database: DynamicDatabase, private loginService: AuthService) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);
    database.initialData().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;
}
