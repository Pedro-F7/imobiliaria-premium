const API_URL = "http://localhost:8000/imoveis";

document.getElementById("formCadastroImovel").addEventListener("submit", async (e) => {
    e.preventDefault();

    const dadosImovel = {
        endereco: document.getElementById("imovelEndereco").value,
        preco: parseFloat(document.getElementById("imovelPreco").value),
        qtdQuartos: parseInt(document.getElementById("imovelQuartos").value),
        qtdBanheiros: parseInt(document.getElementById("imovelBanheiros").value),
        vagasGaragem: parseInt(document.getElementById("imovelVagas").value),
        tipo: document.getElementById("imovelTipo").value,
        disponivel: true
    };

    try {
        const resposta = await fetch(API_URL, {
            method: "POST",
            mode: "cors",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(dadosImovel)
        });

        if (resposta.ok) {
            document.getElementById("formCadastroImovel").reset();
            carregarTabelaAdmin();
        } else {
            alert("Erro ao salvar o imóvel no servidor.");
        }
    } catch (erro) {
        console.error("Erro na conexão:", erro);
        alert("Não foi possível falar com o Back-end Java. Ele está rodando?");
    }
});

async function carregarTabelaAdmin() {
    try {
        const resposta = await fetch(API_URL);
        const imoveis = await resposta.json();

        const tabelaBody = document.getElementById("tabelaAdminImoveis");
        tabelaBody.innerHTML = "";

        if (imoveis.length === 0) {
            tabelaBody.innerHTML = `<tr><td colspan="4" class="text-center text-muted py-4">Nenhum imóvel indexado no MySQL.</td></tr>`;
            return;
        }

        imoveis.forEach(imovel => {
            const es_apto = imovel.tipo === "Apartamento";
            const badgeClass = es_apto ? "badge-apto" : "badge-casa";
            const icone = es_apto ? "🏢" : "🏠";

            tabelaBody.innerHTML += `
                <tr>
                    <td><span class="badge-tipo ${badgeClass}">${icone} ${imovel.tipo || "Casa"}</span></td>
                    <td class="text-truncate text-white" style="max-width: 200px;" title="${imovel.endereco}">${imovel.endereco}</td>
                    <td class="fw-bold text-white">R$ ${imovel.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                    <td class="text-center">
                        <button class="btn btn-sm btn-outline-danger" style="border-radius: 6px; padding: 4px 10px;" onclick="deletarImovel(${imovel.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    } catch (erro) {
        console.error("Erro ao renderizar tabela:", erro);
    }
}

async function deletarImovel(id) {
    if (!confirm("⚠️ Tem certeza que deseja remover este imóvel permanentemente do sistema?")) return;

    try {
        const resposta = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });

        if (resposta.ok) {
            carregarTabelaAdmin(); 
        } else {
            alert("Erro ao tentar deletar o imóvel do banco de dados.");
        }
    } catch (erro) {
        console.error("Erro na requisição de exclusão:", erro);
    }
}

carregarTabelaAdmin();