package br.com.bantads.ms_gerente.services;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RabbitMQService {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void sendMessage(String queue, Object message) {
        rabbitTemplate.convertAndSend(queue, message);
    }
}
