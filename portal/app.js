const API_URL = "http://localhost:8000/imoveis";

async function carregarVitrineCompleta() {
    try {
        const resposta = await fetch(API_URL);
        const imoveis = await resposta.json();
        
        const vitrine = document.getElementById("vitrinePublica");
        vitrine.innerHTML = ""; 

        // Filtra apenas o que o chefe deixou marcado como ativo/disponível
        const ativos = imoveis.filter(i => i.disponivel === true);

        if (ativos.length === 0) {
            vitrine.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-muted">Nenhum imóvel disponível no catálogo no momento.</p>
                </div>
            `;
            return;
        }

        ativos.forEach(imovel => {
            vitrine.innerHTML += `
                <div class="col-lg-4 col-md-6">
                    <div class="card-imovel-premium">
                        <div class="card-image-placeholder">🏢</div>
                        <div class="card-content">
                            <div class="price-tag">R$ ${imovel.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                            <div class="address-text" title="${imovel.endereco}">${imovel.endereco}</div>
                            <div class="specs-footer">
                                <span><strong>${imovel.qtdQuartos}</strong> Quartos</span>
                                <span>•</span>
                                <span><strong>${imovel.qtdBanheiros}</strong> Banheiros</span>
                                <span>•</span>
                                <span><strong>${imovel.vagasGaragem}</strong> Vagas</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (erro) {
        console.error("Erro ao consumir a API do Java:", erro);
    }
}

// Roda automaticamente ao abrir
carregarVitrineCompleta();