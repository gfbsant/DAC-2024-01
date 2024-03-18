import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[numeric]'
})
export class NumericDirective {

  constructor() {
  }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    valor = valor.replace(/[\D]/g, '');
    $event.target.value = valor;
  }
}
