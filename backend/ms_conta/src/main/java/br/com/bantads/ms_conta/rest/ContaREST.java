package br.com.bantads.ms_conta.rest;

import br.com.bantads.ms_conta.dto.ContaDTO;
import br.com.bantads.ms_conta.exception.ResourceNotFoundException;
import br.com.bantads.ms_conta.model.Conta;
import br.com.bantads.ms_conta.repository.ContaRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin
@RestController
@RequestMapping(value = "/conta")
public class ContaREST {

    private final ContaRepository repoConta;
    private final ModelMapper modelMapper;

    @Autowired
    public ContaREST(ContaRepository repoCliente, ModelMapper modelMapper) {
        this.repoConta = repoCliente;
        this.modelMapper = modelMapper;
    }


    @PostMapping()
    public ResponseEntity<ContaDTO> create(@RequestBody ContaDTO contaDTO) {
        checkDataIntegrity(contaDTO);
        Conta entity = modelMapper.map(contaDTO, Conta.class);
        ContaDTO savedInstance = modelMapper.map(repoConta.save(entity), ContaDTO.class);
        return new ResponseEntity<>(savedInstance, HttpStatus.CREATED);
    }

    /// exemplo de chamada: http://localhost:8080/cliente
    @GetMapping()
    public List<ContaDTO> findAll() {
        List<Conta> list = repoConta.findAll();
        return list.stream()
                .map(c -> modelMapper.map(c, ContaDTO.class))
                .collect(Collectors.toList());
    }

    /// exemplo de chamada: http://localhost:8080/cliente?id=1
    @GetMapping(params = "id")
    public ContaDTO findById(@RequestParam Long id) {
        Conta entity = repoConta.findById(id).orElseThrow(
                () -> new ResourceNotFoundException(
                        "Conta not found with id = " + id));
        return modelMapper.map(entity, ContaDTO.class);
    }

    /// exemplo de chamada: http://localhost:8080/conta?clienteId=1
    @GetMapping(params = "clienteId")
    public ContaDTO findByCliente(@RequestParam Long clienteId) {
        Conta entity = repoConta.findByClienteId(clienteId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Conta not found for clienteId = " + clienteId));
        return modelMapper.map(entity, ContaDTO.class);
    }

    /*
    header: Content-Type: application/json
    body: raw
     {
        "id": 1,
        "clienteId": 1,
        "numeroConta": "123456",
        "dataCriacao": "2021-08-01T00:00:00.000+00:00",
        "limite": 1000.0
     }
     */
    @PutMapping()
    public ContaDTO update(@RequestBody ContaDTO contaDTO) {
        if (contaDTO.getId() == null)
            throw new IllegalArgumentException("ID attribute is required!");
        checkDataIntegrity(contaDTO);
        Conta entity = repoConta.findById(contaDTO.getId()).orElseThrow(
                () -> new ResourceNotFoundException("Cliente not found with id = " + contaDTO.getId()));
        return modelMapper.map(repoConta.save(updatedEntity(contaDTO, entity)), ContaDTO.class);
    }

    /// exemplo de chamada: http://localhost:8080/conta?id=1
    @DeleteMapping(params = "id")
    public ResponseEntity<?> delete(@RequestParam Long id) {
        Conta entity = repoConta.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Conta not found with id = " + id));
        repoConta.delete(entity);
        return ResponseEntity.noContent().build();
    }

    /// exemplo de chamada: http://localhost:8080/conta?clienteId=1
    @DeleteMapping(params = "clienteId")
    public ResponseEntity<?> deleteByClienteId(@RequestParam Long clienteId) {
        Conta entity = repoConta.findByClienteId(clienteId).orElseThrow(
                () -> new ResourceNotFoundException("Conta not found with clienteId = " + clienteId));
        repoConta.delete(entity);
        return ResponseEntity.noContent().build();
    }

    private void checkDataIntegrity(ContaDTO contaDTO) {
        if (contaDTO == null)
            throw new IllegalArgumentException("Invalid entity!");
        if (contaDTO.getClienteId() == null)
            throw new IllegalArgumentException("ClienteId attribute is required!");
        if (contaDTO.getNumeroConta() == null)
            throw new IllegalArgumentException("NumeroConta attribute is required!");
        if (contaDTO.getDataCriacao() == null)
            throw new IllegalArgumentException("DataCriacao attribute is required!");
    }

    static private Conta updatedEntity(ContaDTO clienteDTO, Conta entity) {
        entity.setClienteId(clienteDTO.getClienteId());
        entity.setNumeroConta(clienteDTO.getNumeroConta());
        entity.setDataCriacao(clienteDTO.getDataCriacao());
        entity.setLimite(clienteDTO.getLimite());
        return entity;
    }
}



