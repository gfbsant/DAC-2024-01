import {Endereco} from "../endereco/endereco.model";

export class Usuario {
  constructor(
    public id? : number,
    public nome? : string,
    public email? : string,
    public cpf?: string,
    public perfil? : string,
    public telefone?: string,
    public endereco? : Endereco,
    public senha?: string) {
  }

  public setPerfil(perfil : string){
    this.perfil = perfil;
  }

  public setEndereco(endereco: Endereco){
    this.endereco = endereco;
  }
}
