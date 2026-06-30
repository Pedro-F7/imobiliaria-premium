const API_URL = "http://localhost:8000/imoveis";

// Atualiza o texto do arquivo anexado na tela
document.getElementById("foto-arquivo").addEventListener("change", function() {
    const fileName = this.files.length > 0 ? this.files[0].name : "Nenhum arquivo selecionado";
    document.getElementById("file-name").innerText = fileName;
});

document.getElementById("form-imovel").addEventListener("submit", async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("foto-arquivo");
    let imagemBase64 = "";

    // Validação: Só executa a conversão se houver um arquivo anexado
    if (fileInput.files && fileInput.files.length > 0) {
        imagemBase64 = await converterParaBase64(fileInput.files[0]);
    }

    const imovel = {
        titulo: document.getElementById("titulo").value,
        endereco: document.getElementById("endereco").value,
        preco: parseFloat(document.getElementById("preco").value),
        qtdQuartos: parseInt(document.getElementById("quartos").value),
        qtdBanheiros: parseInt(document.getElementById("banheiros").value),
        vagasGaragem: parseInt(document.getElementById("vagas").value),
        tipo: document.getElementById("tipo").value,
        imagemBase64: imagemBase64, // Mandará vazio caso não tenha foto, sem quebrar
        disponivel: true
    };

    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imovel)
    })
    .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
    })
    .then(() => {
        document.getElementById("form-imovel").reset();
        document.getElementById("quartos").value = "1";
        document.getElementById("banheiros").value = "1";
        document.getElementById("vagas").value = "0";
        document.getElementById("file-name").innerText = "Nenhum arquivo selecionado";
        carregarImoveis();
    })
    .catch(() => alert("Erro ao indexar ativo. Verifique se o back-end está rodando."));
});

function converterParaBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function carregarImoveis() {
    fetch(API_URL)
        .then(res => res.json())
        .then(imoveis => {
            const tbody = document.getElementById("tabela-imoveis");
            const divVazia = document.getElementById("tabela-vazia");
            tbody.innerHTML = "";

            if (imoveis.length === 0) {
                divVazia.style.display = "block";
                return;
            }
            
            divVazia.style.display = "none";

            imoveis.forEach(imovel => {
                const q = imovel.qtdQuartos || 0;
                const b = imovel.qtdBanheiros || 0;
                const v = imovel.vagasGaragem || 0;

                tbody.innerHTML += `
                    <tr>
                        <td class="especificacao-td">${q}Q | ${b}B | ${v}V</td>
                        <td>${imovel.endereco}</td>
                        <td>R$ ${imovel.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                        <td style="text-align: center;">
                            <button class="btn-excluir" onclick="deletarImovel(${imovel.id})">Excluir</button>
                        </td>
                    </tr>
                `;
            });
        })
        .catch(() => {
            document.getElementById("tabela-vazia").innerText = "Erro ao conectar com a API local.";
        });
}

function deletarImovel(id) {
    if (confirm("Confirmar a remoção permanente deste ativo?")) {
        fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => carregarImoveis());
    }
}

carregarImoveis();