package br.com.bantads.saga.amqp;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import br.com.bantads.saga.dto.ClienteDTO;

public class ClienteProducer {
	@Autowired
	private RabbitTemplate template;

	@Autowired
	@Qualifier("cliente")
	private Queue queue;

	public void send(ClienteTransfer cliente) {
		System.out.println(cliente);
		this.template.convertAndSend(this.queue.getName(), cliente);
	}

	public ClienteTransfer sendAndReceive(ClienteDTO cliente, String action) {
		ClienteTransfer dt = new ClienteTransfer(cliente, action);
		System.out.println("Chegou no send and receive");
		ClienteTransfer resposta = (ClienteTransfer) this.template.convertSendAndReceive(this.queue.getName(), dt);
		System.out.println("Resposta: " + resposta);
		return resposta;

	}

	public ClienteTransfer sendAndReceiveInt(Long cliente, String action) {
		ClienteDTO cli = new ClienteDTO();
		cli.setId(cliente);
		ClienteTransfer dt = new ClienteTransfer(cli, action);
		System.out.println("Chegou no send and receive");
		ClienteTransfer resposta = (ClienteTransfer) this.template.convertSendAndReceive(this.queue.getName(), dt);
		System.out.println("Resposta: " + resposta);
		return resposta;
	}
}
