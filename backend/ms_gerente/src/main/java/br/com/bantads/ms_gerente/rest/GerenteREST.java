package br.com.bantads.ms_gerente.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.bantads.ms_gerente.model.Gerente;

@CrossOrigin
@RestController

public class GerenteREST {
    public static List<Gerente> lista = new ArrayList<>();

    @GetMapping("/gerentes")
    public List<Gerente> obterTodosGerentes(){
        return lista;
    }

    @GetMapping("/clientes{id}")
    public Gerente obterTodosGerentes(@PathVariable("id") int id){
        Gerente u = lista.stream().filter(usu -> usu.getId() == id).findAny().orElse(null);
        return u;
    }


    //valores fake pra teste, porta 5001
    //OK!!
    static {
        lista.add(new Gerente(1, "Joao", "444444444-44", "joao@gerentes.com.br", "41 4444-4444"));
        lista.add(new Gerente(2, "pedro", "555555555-55", "pedro@gerente.com.br", "41 5555-5555"));
        lista.add(new Gerente(3, "paulo", "666666666-66", "paulo@gerentes.com.br", "41 66666-6666"));

    }

}
