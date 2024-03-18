import { Component } from '@angular/core';

@Component({
  selector: 'app-transferencia-done',
  templateUrl: './transferencia-done.component.html',
  styleUrl: './transferencia-done.component.css'
})
export class TransferenciaDoneComponent {
  transferDate: string;


  constructor() {
    const date = new Date();
    this.transferDate = date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  }
}
