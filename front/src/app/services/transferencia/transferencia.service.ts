import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor() { }

  realizarTransferencia(dadosTransferencia: any): Observable<any> {
    console.log('Transferência realizada:', dadosTransferencia);
    return of({ success: true, message: 'Transferência realizada com sucesso!' });
  }

}
