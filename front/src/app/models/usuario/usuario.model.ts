
export class Usuario {
  constructor(
    public id? : number,
    public email? : string,
    public perfil? : string,
    public senha?: string) {
  }

  public setPerfil(perfil : string){
    this.perfil = perfil;
  }

}
