import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../../../../services/transacao/transacao.service';
import { Transacao } from '../../../../models/transacao/transacao.model';
import { LoginService } from '../../../../services/login/login.service';

@Component({
  selector: 'app-consulta-extrato',
  templateUrl: './consulta-extrato.component.html',
  styleUrls: ['./consulta-extrato.component.css']
})
export class ConsultaExtratoComponent implements OnInit {

  transacoes: Transacao[] = [];

  constructor(private transacaoService: TransacaoService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.carregarTransacoes();
  }

  carregarTransacoes(): void {
    const usuario = this.loginService.usuarioLogado;
    if (usuario && usuario.id !== undefined) {
      const inicio = '2023-01-01';
      const fim = '2023-01-31';
      this.transacaoService.getTransacoes(usuario.id, inicio, fim).subscribe(transacoes => {
        this.transacoes = transacoes;
      });
    }
  }
}
