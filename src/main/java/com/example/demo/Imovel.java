package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Imovel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String endereco;
    private int numeroQuartos;
    private int numeroBanheiros;
    private double preco;
    private boolean disponivel;
    private int numeroGaragem;
    private int numeroPiscinas;

    public Imovel() {
    }

    // 2. Construtor Completo (Para facilitar quando formos testar ou criar imóveis)
    public Imovel(Long id, String endereco, int numeroQuartos, int numeroBanheiros, double preco, boolean disponivel,
            int numeroGaragem, int numeroPiscinas) {
        this.id = id;
        this.endereco = endereco;
        this.numeroQuartos = numeroQuartos;
        this.numeroBanheiros = numeroBanheiros;
        this.preco = preco;
        this.disponivel = disponivel;
        this.numeroGaragem = numeroGaragem;
        this.numeroPiscinas = numeroPiscinas;
    }

    // 3. Getters e Setters (Manuais, garantindo compatibilidade total com o Java
    // 25)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public int getNumeroQuartos() {
        return numeroQuartos;
    }

    public void setNumeroQuartos(int numeroQuartos) {
        this.numeroQuartos = numeroQuartos;
    }

    public int getNumeroBanheiros() {
        return numeroBanheiros;
    }

    public void setNumeroBanheiros(int numeroBanheiros) {
        this.numeroBanheiros = numeroBanheiros;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    public int getNumeroGaragem() {
        return numeroGaragem;
    }

    public void setNumeroGaragem(int numeroGaragem) {
        this.numeroGaragem = numeroGaragem;
    }

    public int getNumeroPiscinas() {
        return numeroPiscinas;
    }

    public void setNumeroPiscinas(int numeroPiscinas) {
        this.numeroPiscinas = numeroPiscinas;
    }
}