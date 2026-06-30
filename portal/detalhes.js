const API_URL = "http://localhost:8000/imoveis";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imovelId = urlParams.get('id');

    if (!imovelId) {
        window.location.href = "index.html";
        return;
    }

    fetch(`${API_URL}/${imovelId}`)
        .then(response => {
            if (!response.ok) throw new Error();
            return response.json();
        })
        .then(imovel => {
            const q = imovel.qtdQuartos || 0;
            const b = imovel.qtdBanheiros || 0;
            const v = imovel.vagasGaragem || 0;
            const tipoImovel = imovel.tipo || "Imóvel";

            document.getElementById("titulo-imovel").innerText = `${tipoImovel} Exclusivo com ${q} Quartos`;
            document.getElementById("localizacao-imovel").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${imovel.endereco}`;
            document.getElementById("preco-imovel").innerText = `R$ ${imovel.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            
            document.getElementById("detalhes-quartos").innerText = q;
            document.getElementById("detalhes-banheiros").innerText = b;
            document.getElementById("detalhes-vagas").innerText = v;
        })
        .catch(() => {
            alert("Não encontramos os dados desse ativo.");
            window.location.href = "index.html";
        });
});