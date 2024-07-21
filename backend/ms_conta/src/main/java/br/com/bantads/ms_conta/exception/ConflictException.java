package br.com.bantads.ms_conta.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.Serial;

@ResponseStatus(HttpStatus.CONFLICT)
public class ConflictException  extends RuntimeException {

    @Serial
    private static final long serialVersionUID = 1L;

    public ConflictException(String ex) {
        super(ex);
        System.err.println("ConflictException: " + ex);
    }
}
