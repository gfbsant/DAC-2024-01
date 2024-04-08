package br.com.bantads.saga.dto;

public class ClienteDTO {
	private Long id;
	private String nome;
	private String cpf;
	private StatusConta aprovado;
	private Long gerente;
	private Long conta;
	private EnderecoDTO endereco;
	private String email;
	private String password;
	private String role;
	private int salario;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public EnderecoDTO getEndereco() {
		return endereco;
	}

	public void setEndereco(EnderecoDTO endereco) {
		this.endereco = endereco;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public StatusConta getAprovado() {
		return aprovado;
	}

	public void setAprovado(StatusConta aprovado) {
		this.aprovado = aprovado;
	}

	public Long getGerente() {
		return gerente;
	}

	public void setGerente(Long gerente) {
		this.gerente = gerente;
	}

	public Long getConta() {
		return conta;
	}

	public void setConta(Long conta) {
		this.conta = conta;
	}

	public int getSalario() {
		return salario;
	}

	public void setSalario(int salario) {
		this.salario = salario;
	}
}