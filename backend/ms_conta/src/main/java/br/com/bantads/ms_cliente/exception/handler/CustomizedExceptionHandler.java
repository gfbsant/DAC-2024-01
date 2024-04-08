package br.com.bantads.ms_cliente.exception.handler;

import br.com.bantads.ms_cliente.exception.ConflictException;
import br.com.bantads.ms_cliente.exception.ExceptionResponse;
import br.com.bantads.ms_cliente.exception.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;

@ControllerAdvice
@RestController
public class CustomizedExceptionHandler extends ResponseEntityExceptionHandler {

    private static ExceptionResponse getExceptionResponse(Exception ex, WebRequest request) {
        return new ExceptionResponse(
                new Date(),
                ex.getMessage(),
                request.getDescription(false));
    }

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ExceptionResponse> handleAllExceptions(
            Exception ex, WebRequest request) {
        return new ResponseEntity<>(getExceptionResponse(ex, request), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public final ResponseEntity<ExceptionResponse> handleNotFoundExceptions(
            Exception ex, WebRequest request) {
        return new ResponseEntity<>(getExceptionResponse(ex, request), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ConflictException.class)
    public final ResponseEntity<ExceptionResponse> handleConflictExceptions(
            Exception ex, WebRequest request) {
        return new ResponseEntity<>(getExceptionResponse(ex, request), HttpStatus.CONFLICT);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public final ResponseEntity<ExceptionResponse> handleIllegalArgumentExceptions(
            Exception ex, WebRequest request) {
        return new ResponseEntity<>(getExceptionResponse(ex, request), HttpStatus.BAD_REQUEST);
    }

}
