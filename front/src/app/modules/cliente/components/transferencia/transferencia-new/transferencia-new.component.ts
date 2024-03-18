import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-transferencia-new',
  templateUrl: './transferencia-new.component.html',
  styleUrl: './transferencia-new.component.css'
})
export class TransferenciaNewComponent {
  constructor(private router: Router) {}

  protected readonly confirm = confirm;

  navigateToConfirm() {
    this.router.navigate(['/cliente/transferencia/quantia']);
  }

}
