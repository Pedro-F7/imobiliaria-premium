package com.example.demo;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImovelRepository extends JpaRepository<Imovel, Long> {

    List<Imovel> findByDisponivelTrue();

    List<Imovel> findByEnderecoContainingIgnoreCaseAndDisponivelTrue(String endereco);

    List<Imovel> findByTipoIgnoreCaseAndDisponivelTrue(String tipo);

    List<Imovel> findByEnderecoContainingIgnoreCaseAndTipoIgnoreCaseAndDisponivelTrue(String endereco, String tipo);
}