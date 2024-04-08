package br.com.bantads.saga.amqp;

import java.io.Serializable;

import br.com.bantads.saga.dto.ClienteDTO;

public class ClienteTransfer implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7119365964321659425L;
	
	ClienteDTO cliente;
	String action;

	public ClienteTransfer() {
	}

	public ClienteTransfer(ClienteDTO cliente, String action) {
		this.cliente = cliente;
		this.action = action;
	}

	public ClienteDTO getCliente() {
		return cliente;
	}

	public void setCliente(ClienteDTO cliente) {
		this.cliente = cliente;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

}