package br.com.bantads.saga.dto;

public class EnderecoDTO {
	private Long id;
	  private String rua;
	  private String numero;
	  private String complemento;
	  private String cep;
	  private String cidade;
	  private String estado;

	  public String getRua() {
	    return rua;
	  }

	  public void setRua(String rua) {
	    this.rua = rua;
	  }

	  public String getNumero() {
	    return numero;
	  }

	  public void setNumero(String numero) {
	    this.numero = numero;
	  }

	  public String getComplemento() {
	    return complemento;
	  }

	  public void setComplemento(String complemento) {
	    this.complemento = complemento;
	  }

	  public String getCep() {
	    return cep;
	  }

	  public void setCep(String cep) {
	    this.cep = cep;
	  }

	  public String getCidade() {
	    return cidade;
	  }

	  public void setCidade(String cidade) {
	    this.cidade = cidade;
	  }

	  public String getEstado() {
	    return estado;
	  }

	  public void setEstado(String estado) {
	    this.estado = estado;
	  }

	  public Long getId() {
	    return id;
	  }

	  public void setId(Long id) {
	    this.id = id;
	  }
}