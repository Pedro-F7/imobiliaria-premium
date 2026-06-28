package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/imoveis")
public class ImovelController {

    @Autowired
    private ImovelRepository imovelRepository;

    @GetMapping
    public ResponseEntity<List<Imovel>> listarImoveis(
            @RequestParam(required = false) String busca,
            @RequestParam(required = false) String tipo) {

        if ((busca == null || busca.isEmpty())
                && (tipo == null || tipo.equalsIgnoreCase("Todos os imóveis") || tipo.isEmpty())) {
            return ResponseEntity.ok(imovelRepository.findByDisponivelTrue());
        }

        if (busca != null && !busca.isEmpty() && tipo != null && !tipo.equalsIgnoreCase("Todos os imóveis")) {
            return ResponseEntity.ok(
                    imovelRepository.findByEnderecoContainingIgnoreCaseAndTipoIgnoreCaseAndDisponivelTrue(busca, tipo));
        }

        if (busca != null && !busca.isEmpty()) {
            return ResponseEntity.ok(imovelRepository.findByEnderecoContainingIgnoreCaseAndDisponivelTrue(busca));
        }

        return ResponseEntity.ok(imovelRepository.findByTipoIgnoreCaseAndDisponivelTrue(tipo));
    }

    @PostMapping
    public ResponseEntity<Imovel> cadastrarImovel(@RequestBody Imovel imovel) {
        imovel.setDisponivel(true);
        Imovel novoImovel = imovelRepository.save(imovel);
        return ResponseEntity.ok(novoImovel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarImovel(@PathVariable Long id) {
        imovelRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}