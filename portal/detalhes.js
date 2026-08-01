// Atualizado para a porta 8010 onde o Spring Boot está rodando
const API_URL = "http://localhost:8010/imoveis";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imovelId = urlParams.get('id');

    if (!imovelId) {
        window.location.href = "index.html";
        return;
    }

    fetch(`${API_URL}/${imovelId}`)
        .then(response => {
            if (!response.ok) throw new Error("Erro ao buscar detalhes do imóvel");
            return response.json();
        })
        .then(imovel => {
            const q = imovel.qtdQuartos || 0;
            const b = imovel.qtdBanheiros || 0;
            const v = imovel.vagasGaragem || 0;
            const tipoImovel = imovel.tipo || "Imóvel";

            document.getElementById("titulo-imovel").innerText = `${tipoImovel} Exclusivo com ${q} Quartos`;
            document.getElementById("localizacao-imovel").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${imovel.endereco}`;
            
            // Garantia de formatação para o preço caso ele venha como número
            const precoFormatado = typeof imovel.preco === 'number' 
                ? imovel.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) 
                : imovel.preco;
                
            document.getElementById("preco-imovel").innerText = `R$ ${precoFormatado}`;
            
            document.getElementById("detalhes-quartos").innerText = q;
            document.getElementById("detalhes-banheiros").innerText = b;
            document.getElementById("detalhes-vagas").innerText = v;
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
            alert("Não encontramos os dados desse ativo. Verifique a conexão com o servidor.");
            // A linha de redirecionamento (window.location.href) foi removida para não expulsar o usuário!
        });
});