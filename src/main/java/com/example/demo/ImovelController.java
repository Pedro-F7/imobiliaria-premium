package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // Diz ao Spring que esta classe vai cuidar das rotas Web (URLs)
@org.springframework.web.bind.annotation.CrossOrigin(origins = "*")
@RequestMapping("/imoveis") // Define que todas as rotas aqui vão começar com /imoveis
public class ImovelController {

    @Autowired // Manda o Spring injetar o Repository aqui automaticamente
    private ImovelRepository imovelRepository;

    // ROTA 1: Listar todos os imóveis (http://localhost:8000/imoveis)
    @GetMapping
    public List<Imovel> listarTodos() {
        return imovelRepository.findAll(); // Busca tudo o que estiver salvo no MySQL
    }

    // ROTA 2: Criar um imóvel de teste direto pelo navegador
    // (http://localhost:8000/imoveis/criar-teste)
    @GetMapping("/criar-teste")
    public String criarTeste() {
        Imovel teste = new Imovel(
                null,
                "Avenida Paulista, 1000 - São Paulo",
                3,
                2,
                750000.00,
                true,
                2,
                1);

        imovelRepository.save(teste); // Salva o imóvel no seu MySQL!

        return "Imóvel de teste salvo com sucesso no seu MySQL!";
    }
}