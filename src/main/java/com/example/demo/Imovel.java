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
    private Double preco;
    private Integer qtdQuartos;
    private Integer qtdBanheiros;
    private Integer vagasGaragem;
    private Boolean disponivel;
    private String tipo;

    public Imovel() {
    }

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

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Integer getQtdQuartos() {
        return qtdQuartos;
    }

    public void setQtdQuartos(Integer qtdQuartos) {
        this.qtdQuartos = qtdQuartos;
    }

    public Integer getQtdBanheiros() {
        return qtdBanheiros;
    }

    public void setQtdBanheiros(Integer qtdBanheiros) {
        this.qtdBanheiros = qtdBanheiros;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Integer getVagasGaragem() {
        return vagasGaragem;
    }

    public void setVagasGaragem(Integer vagasGaragem) {
        this.vagasGaragem = vagasGaragem;
    }

    public Boolean getDisponivel() {
        return disponivel;
    }

    public void setDisponivel(Boolean disponivel) {
        this.disponivel = disponivel;
    }
}