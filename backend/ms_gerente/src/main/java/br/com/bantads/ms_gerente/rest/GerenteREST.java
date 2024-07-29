package br.com.bantads.ms_gerente.rest;

import br.com.bantads.ms_commons.constants.RabbitMQConstants;
import br.com.bantads.ms_commons.dto.AlterarUsuarioGerenteDTO;
import br.com.bantads.ms_commons.dto.GerenteContaDTO;
import br.com.bantads.ms_commons.dto.GerenteDTO;
import br.com.bantads.ms_gerente.model.Gerente;
import br.com.bantads.ms_gerente.model.GerenteConta;
import br.com.bantads.ms_gerente.repository.GerenteContaRepository;
import br.com.bantads.ms_gerente.repository.GerenteRepository;
import br.com.bantads.ms_gerente.services.RabbitMQService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
public class GerenteREST {

    @Autowired
    private GerenteRepository gerenteRepository;

    @Autowired
    private GerenteContaRepository gerenteContaRepository;

    @Autowired
    private ModelMapper mapper;

    @Autowired
    private RabbitMQService rabbitMQService;

    @GetMapping("/gerentes")
    public ResponseEntity<List<GerenteDTO>> listarTodos() {
        List<Gerente> gerentes = gerenteRepository.findAll();
        List<GerenteConta> gerenteContas = gerenteContaRepository.findAll();
        List<GerenteDTO> output = new ArrayList<>();

        for (Gerente gerente : gerentes) {
            BigDecimal somaSaldosPositivos = gerenteContas.stream()
                    .filter(gerenteConta -> gerenteConta.getIdGerente().equals(gerente.getId()))
                    .map(GerenteConta::getSaldoConta)
                    .filter(saldo -> saldo.compareTo(BigDecimal.ZERO) > 0)
                    .reduce(BigDecimal.ZERO, BigDecimal::add);

            BigDecimal somaSaldosNegativos = gerenteContas.stream().filter(gerenteConta -> gerenteConta.getIdGerente().equals(gerente.getId()))
                    .map(GerenteConta::getSaldoConta)
                    .filter(saldo -> saldo.compareTo(BigDecimal.ZERO) < 0)
                    .reduce(BigDecimal.ZERO, (a, b) -> a.add(b.negate()));

            output.add(new GerenteDTO(
                    gerente.getId(),
                    gerente.getNome(),
                    gerente.getEmail(),
                    gerente.getCpf(),
                    gerente.getQuantidadeContas(),
                    somaSaldosPositivos,
                    somaSaldosNegativos));
        }
        return ResponseEntity.ok(output);
    }

    @GetMapping("/gerentes/{id}")
    public ResponseEntity<GerenteDTO> buscarPorId(@PathVariable UUID id) {
        Gerente gerente = gerenteRepository.findAll().stream().filter(g -> g.getId().equals(id))
                .findAny().orElse(null);

        if (gerente == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(gerente, GerenteDTO.class));
    }

    @PostMapping("/gerentes")
    public ResponseEntity<GerenteDTO> salvar(@RequestBody GerenteDTO gerenteDTO) {
        gerenteDTO.setQuantidadeContas(0);
        gerenteRepository.saveAndFlush(mapper.map(gerenteDTO, Gerente.class));
        rabbitMQService.sendMessage(RabbitMQConstants.FILA_GERENTE_CRIADO, gerenteDTO);
        return ResponseEntity.ok(gerenteDTO);
    }

    @PutMapping("/gerentes/{id}")
    public ResponseEntity<GerenteDTO> atualizar(@PathVariable UUID id, @RequestBody GerenteDTO gerenteDTO) {
        Gerente gerenteAtualizar = gerenteRepository.findAll().stream().filter(g -> g.getId().equals(id))
                .findAny().orElse(null);
        if (gerenteAtualizar == null) {
            return ResponseEntity.notFound().build();
        }
        AlterarUsuarioGerenteDTO alterarUsuarioGerenteDTO = new AlterarUsuarioGerenteDTO(
                gerenteAtualizar.getEmail(), gerenteDTO.getEmail(), gerenteDTO.getNome());

        gerenteAtualizar.setNome(gerenteDTO.getNome());
        gerenteAtualizar.setEmail(gerenteDTO.getEmail());
        gerenteAtualizar.setCpf(gerenteDTO.getCpf());
        gerenteRepository.saveAndFlush(gerenteAtualizar);
        rabbitMQService.sendMessage(RabbitMQConstants.FILA_GERENTE_EDITADO, alterarUsuarioGerenteDTO);
        return ResponseEntity.ok(mapper.map(gerenteAtualizar, GerenteDTO.class));
    }

    @DeleteMapping("/gerentes/{id}")
    public ResponseEntity<GerenteDTO> remover(@PathVariable UUID id) {
        Gerente gerenteRemover = gerenteRepository.findAll().stream().filter(g -> g.getId().equals(id))
                .findAny().orElse(null);
        if (gerenteRemover == null) {
            return ResponseEntity.notFound().build();
        }
        if (gerenteRemover.getQuantidadeContas() > 0) {
            // forbidden
            return ResponseEntity.status(403).build();
        }
        gerenteRepository.delete(gerenteRemover);
        rabbitMQService.sendMessage(RabbitMQConstants.FILA_GERENTE_REMOVIDO, gerenteRemover.getEmail());
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/gerentes/email/{email}")
    public ResponseEntity<GerenteDTO> buscarPorEmail(@PathVariable String email) {
        Gerente gerente = gerenteRepository.findAll().stream().filter(g -> g.getEmail().equals(email))
                .findAny().orElse(null);
        if (gerente == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(gerente, GerenteDTO.class));
    }


}
