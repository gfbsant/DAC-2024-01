package br.com.bantads.ms_cliente.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {

        @Serial
        private static final long serialVersionUID = 1L;

        public BadRequestException(String ex) {
            super(ex);
            System.err.println("BadRequestException: " + ex);
        }
}
