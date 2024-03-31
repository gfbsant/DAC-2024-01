import {Component} from '@angular/core';
import {GerenteService} from "../../../../services/gerente/gerente.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editar-gerente',
  templateUrl: './editar-gerente.component.html',
  styleUrl: './editar-gerente.component.css'
})
export class EditarGerenteComponent {

  protected readonly history = history;
  gerente: any;

  constructor(private route: ActivatedRoute, private gerenteService: GerenteService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gerenteService.getGerenteById(params['id'] ?? 1).subscribe(gerente => {
        this.gerente = gerente;
      });
    });
  }

  salvar() {
    this.gerenteService.updateGerente(this.gerente.id, this.gerente).subscribe(updatedGerente => {
      this.gerente = updatedGerente;
      alert('Gerente salvo com sucesso!');
      history.back();
    });
  }
}
