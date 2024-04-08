package br.com.bantads.ms_cliente.rest;

import br.com.bantads.ms_cliente.dto.ClienteDTO;
import br.com.bantads.ms_cliente.exception.ConflictException;
import br.com.bantads.ms_cliente.exception.ResourceNotFoundException;
import br.com.bantads.ms_cliente.model.Cliente;
import br.com.bantads.ms_cliente.repository.ClienteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;


@CrossOrigin
@RestController
@RequestMapping(value = "/cliente")
public class ClienteREST {

    private final Logger logger = Logger.getLogger(ClienteREST.class.getName());

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
    public ClienteDTO create(@RequestBody ClienteDTO clienteDTO) {
        logger.info("Creating a new person");
        checkDataIntegrity(clienteDTO);
        Cliente entity = modelMapper.map(clienteDTO, Cliente.class);
        return modelMapper.map(repoCliente.save(entity), ClienteDTO.class);
    }

    /// exemplo de chamada: http://localhost:8080/cliente
    @GetMapping()
    public List<ClienteDTO> getAll() {
        List<Cliente> clientes = repoCliente.findAll();
        return clientes.stream()
                .map(c -> modelMapper.map(c, ClienteDTO.class))
                .collect(Collectors.toList());
    }

    /// exemplo de chamada: http://localhost:8080/cliente?id=1
    @GetMapping(params = "id")
    public ClienteDTO getById(@RequestParam Long id) {
        logger.info("Finding a person with ID: " + id);
        Cliente entity = repoCliente.findById(id).orElseThrow(
                () -> new ResourceNotFoundException(
                        "Cliente não encontrado com id: " + id));
        logger.info("Person found!");
        return modelMapper.map(entity, ClienteDTO.class);
    }

    /// exemplo de chamada: http://localhost:8080/cliente?email=teste@gmail.com
    @GetMapping(params = "email")
    public ClienteDTO getByEmail(@RequestParam String email) {
        logger.info("Finding a person with email: " + email);
        Cliente entity = repoCliente.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado com email: " + email));
        logger.info("Person found!");
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
        logger.info("Editing a person with ID: " + clienteDTO.getId());
        checkDataIntegrity(clienteDTO);
        Cliente entity = repoCliente.findById(clienteDTO.getId()).orElseThrow(
                () -> new ResourceNotFoundException("Cliente não encontrado"));
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
        return modelMapper.map(repoCliente.save(entity), ClienteDTO.class);
    }


    /// exemplo de chamada: http://localhost:8080/cliente?id=1
    @DeleteMapping(params = "id")
    public ResponseEntity<?> delete(@RequestParam Long id) {
        logger.info("Deleting a person with ID: " + id);
        Cliente entity = repoCliente.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Cliente não encontrado"));
        repoCliente.delete(entity);
        logger.info("Person deleted!");
        return ResponseEntity.noContent().build();
    }

    private void checkDataIntegrity(ClienteDTO clienteDTO) {
        repoCliente.findByEmail(clienteDTO.getEmail()).ifPresent(c -> {
            if (!c.getId().equals(clienteDTO.getId()))
                throw new ConflictException("Cliente já cadastrado com email: " + c.getEmail());
        });
        repoCliente.findByCpf(clienteDTO.getCpf()).ifPresent(c -> {
            if (!c.getId().equals(clienteDTO.getId()))
                throw new ConflictException("Cliente já cadastrado com cpf: " + c.getCpf());
        });
    }

}
