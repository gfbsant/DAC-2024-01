import { Component } from '@angular/core';
import { GerenteService } from "../../../../services/gerente/gerente.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editar-gerente',
  templateUrl: './editar-gerente.component.html',
  styleUrl: './editar-gerente.component.css'
})
export class EditarGerenteComponent {

  protected readonly history = history;
  gerente: any;
  id: string = "";
  constructor(private route: ActivatedRoute, private gerenteService: GerenteService) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.gerenteService.getGerenteById(+this.id).subscribe(
      gerente => {this.gerente = gerente;
      }
    );


    /*
    this.route.params.subscribe(params => {
      this.gerenteService.getGerenteById(params['id'] ?? 1).subscribe(gerente => {
        this.gerente = gerente;
      });
    });
    */


  }

  salvar() {
    this.gerenteService.updateGerente(this.gerente.id, this.gerente).subscribe(updatedGerente => {
      this.gerente = updatedGerente;
      alert('Gerente salvo com sucesso!');
      history.back();
    });
  }
}
