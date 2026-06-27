const API_URL = "http://localhost:8000/imoveis";

async function carregarImoveis() {
    try {
        const resposta = await fetch(API_URL);
        const imoveis = await resposta.json();
        
        const tabela = document.getElementById("tabelaImoveis");
        tabela.innerHTML = ""; 

        imoveis.forEach(imovel => {
            tabela.innerHTML += `
                <tr>
                    <td style="color: var(--primary); font-weight: 700;">#${imovel.id}</td>
                    <td class="fw-medium">${imovel.endereco}</td>
                    <td>
                        <span style="color: var(--text-body); font-size: 0.9rem;">
                            ${imovel.qtdQuartos} Quartos • ${imovel.qtdBanheiros} Banheiros • ${imovel.vagasGaragem} Vagas
                        </span>
                    </td>
                    <td class="fw-bold" style="color: #ffffff">
                        R$ ${imovel.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td>
                        <span class="${imovel.disponivel ? 'badge-available' : 'badge-sold'}">
                            ${imovel.disponivel ? 'Disponível' : 'Vendido'}
                        </span>
                    </td>
                </tr>
            `;
        });
    } catch (erro) {
        console.error("Erro ao buscar imóveis:", erro);
    }
}

document.getElementById("formImovel").addEventListener("submit", async (e) => {
    e.preventDefault(); 

    const novoImovel = {
        endereco: document.getElementById("endereco").value,
        qtdQuartos: parseInt(document.getElementById("quartos").value),
        qtdBanheiros: parseInt(document.getElementById("banheiros").value),
        preco: parseFloat(document.getElementById("preco").value),
        disponivel: document.getElementById("disponivel").checked,
        vagasGaragem: parseInt(document.getElementById("vagasGaragem").value),
        qtdSuites: parseInt(document.getElementById("suites").value)
    };

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novoImovel)
        });

        if (resposta.ok) {
            document.getElementById("formImovel").reset(); 
            carregarImoveis(); 
        }
    } catch (erro) {
        console.error("Erro ao cadastrar imóvel:", erro);
    }
});

carregarImoveis();