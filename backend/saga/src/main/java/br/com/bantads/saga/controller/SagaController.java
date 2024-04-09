package br.com.bantads.saga.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SagaController {
	@GetMapping(value = "/", produces = "application/json")
	public void getMethodName() {
		System.out.println("funcionou");
	}
}
