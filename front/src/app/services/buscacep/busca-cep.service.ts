import {Injectable} from '@angular/core';
import cep from 'cep-promise';

@Injectable({
  providedIn: 'root'
})


export class BuscaCepService {

  constructor() {
  }

  async buscaCep(cepBusca: string) {
    try {
      return await cep(cepBusca);
    } catch (error) {
      throw error;
    }
  }

}
