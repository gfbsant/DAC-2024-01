package br.com.bantads.ms_cliente.rest;

import br.com.bantads.ms_cliente.dto.ClienteDTO;
import br.com.bantads.ms_cliente.exception.ConflictException;
import br.com.bantads.ms_cliente.exception.ResourceNotFoundException;
import br.com.bantads.ms_cliente.model.Cliente;
import br.com.bantads.ms_cliente.repository.ClienteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin
@RestController
@RequestMapping(value = "/cliente")
public class ClienteREST {


    private final ClienteRepository repoCliente;
    private final ModelMapper modelMapper;

    @Autowired
    public ClienteREST(ClienteRepository repoCliente, ModelMapper modelMapper) {
        this.repoCliente = repoCliente;
        this.modelMapper = modelMapper;
    }

    /*
    header: Content-Type: application/json
    body: raw
     {
        "nome": "Teste",
        "email": "teste@gmail.com",
        "cpf": "12345678901",
        "telefone": "12345678901",
        "cep": "12345678",
        "numero": 123,
        "complemento": "Teste",
        "salario": 1000.0,
        "saldo": 1000.0,
        "situacaoCadastral": "APROVADO"
    }
    */
    @PostMapping()
    public ResponseEntity<ClienteDTO> create(@RequestBody ClienteDTO clienteDTO) {
        checkDataIntegrity(clienteDTO);
        Cliente entity = modelMapper.map(clienteDTO, Cliente.class);
        ClienteDTO savedInstance = modelMapper.map(repoCliente.save(entity), ClienteDTO.class);
        return new ResponseEntity<>(savedInstance, HttpStatus.CREATED);
    }

    /// exemplo de chamada: http://localhost:8080/cliente
    @GetMapping()
    public List<ClienteDTO> findAll() {
        List<Cliente> list = repoCliente.findAll();
        return list.stream()
                .map(c -> modelMapper.map(c, ClienteDTO.class))
                .collect(Collectors.toList());
    }

    /// exemplo de chamada: http://localhost:8080/cliente?id=1
    @GetMapping(params = "id")
    public ClienteDTO findById(@RequestParam Long id) {
        Cliente entity = repoCliente.findById(id).orElseThrow(
                () -> new ResourceNotFoundException(
                        "Cliente not found with id = " + id));
        return modelMapper.map(entity, ClienteDTO.class);
    }

    /// exemplo de chamada: http://localhost:8080/cliente?email=teste@gmail.com
    @GetMapping(params = "email")
    public ClienteDTO findByEmail(@RequestParam String email) {
        Cliente entity = repoCliente.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente not found with email = " + email));
        return modelMapper.map(entity, ClienteDTO.class);
    }

    /*
    header: Content-Type: application/json
    body: raw
     {
        "id": 1,
        "nome": "Teste mudanca nome",
        "email": "teste@gmail.com",
        "cpf": "12345678901",
        "telefone": "12345678901",
        "cep": "12345678",
        "numero": 123,
        "complemento": "Teste",
        "salario": 1000.0,
        "saldo": 1000.0,
        "situacaoCadastral": "APROVADO"
     }
     */
    @PutMapping()
    public ClienteDTO update(@RequestBody ClienteDTO clienteDTO) {
        if (clienteDTO.getId() == null)
            throw new IllegalArgumentException("ID attribute is required!");
        checkDataIntegrity(clienteDTO);
        Cliente entity = repoCliente.findById(clienteDTO.getId()).orElseThrow(
                () -> new ResourceNotFoundException("Cliente not found with id = " + clienteDTO.getId()));
        return modelMapper.map(repoCliente.save(updatedEntity(clienteDTO, entity)), ClienteDTO.class);
    }

    /// exemplo de chamada: http://localhost:8080/cliente?id=1
    @DeleteMapping(params = "id")
    public ResponseEntity<?> delete(@RequestParam Long id) {
        Cliente entity = repoCliente.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Cliente not found with id = " + id));
        repoCliente.delete(entity);
        return ResponseEntity.noContent().build();
    }

    private void checkDataIntegrity(ClienteDTO clienteDTO) {
        if (clienteDTO.getEmail() == null)
            throw new IllegalArgumentException("Email attribute is required!");
        if (clienteDTO.getCpf() == null)
            throw new IllegalArgumentException("CPF attribute is required!");
        repoCliente.findByEmail(clienteDTO.getEmail()).ifPresent(c -> {
            if (!c.getId().equals(clienteDTO.getId()))
                throw new ConflictException("Cliente already registered with email = " + c.getEmail());
        });
        repoCliente.findByCpf(clienteDTO.getCpf()).ifPresent(c -> {
            if (!c.getId().equals(clienteDTO.getId()))
                throw new ConflictException("Cliente already registered with cpf = " + c.getCpf());
        });
    }

    static private Cliente updatedEntity(ClienteDTO clienteDTO, Cliente entity) {
        entity.setNome(clienteDTO.getNome());
        entity.setEmail(clienteDTO.getEmail());
        entity.setCpf(clienteDTO.getCpf());
        entity.setTelefone(clienteDTO.getTelefone());
        entity.setCep(clienteDTO.getCep());
        entity.setNumero(clienteDTO.getNumero());
        entity.setComplemento(clienteDTO.getComplemento());
        entity.setSalario(clienteDTO.getSalario());
        entity.setSaldo(clienteDTO.getSaldo());
        entity.setSituacaoCadastral(clienteDTO.getSituacaoCadastral());
        return entity;
    }
}
