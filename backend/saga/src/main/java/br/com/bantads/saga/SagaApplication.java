package br.com.bantads.saga;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class SagaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SagaApplication.class, args);
	}

}
