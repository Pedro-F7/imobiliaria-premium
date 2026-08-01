document.addEventListener('DOMContentLoaded', () => {
    carregarImoveis();
});

function carregarImoveis() {
    fetch('http://localhost:8010/imoveis') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta do servidor: ' + response.status);
            }
            return response.json();
        })
        .then(imoveis => {
            // ID corrigido para bater com o index.html
            const container = document.getElementById('grid-imoveis'); 
            
            if (!container) {
                console.error('Elemento #grid-imoveis não foi encontrado no HTML.');
                return;
            }

            container.innerHTML = ''; // Limpa o container

            if (imoveis.length === 0) {
                container.innerHTML = '<p class="sem-imoveis">Nenhum imóvel disponível no momento.</p>';
                return;
            }

            imoveis.forEach(imovel => {
                const card = document.createElement('div');
                card.className = 'card-imovel';

                // Tratamento de valores padrão
                const titulo = imovel.titulo || imovel.tipo || 'Imóvel sem título';
                const preco = imovel.preco ? `R$ ${Number(imovel.preco).toLocaleString('pt-BR')}` : 'Sob consulta';
                const endereco = imovel.endereco || 'Localização não informada';
                const imagem = imovel.imagemUrl || 'https://via.placeholder.com/300x200?text=Sem+Foto';

                card.innerHTML = `
                    <img src="${imagem}" alt="${titulo}" class="card-img" style="width: 100%; height: 200px; object-fit: cover;">
                    <div class="card-body" style="padding: 15px;">
                        <h3 style="margin: 0 0 10px 0;">${titulo}</h3>
                        <p style="color: #666; margin-bottom: 8px;"><i class="fa-solid fa-location-dot"></i> ${endereco}</p>
                        <p style="font-size: 1.2rem; font-weight: bold; color: #2b7a78;">${preco}</p>
                        <a href="detalhes.html?id=${imovel.id}" class="btn-detalhes" style="display: inline-block; margin-top: 10px; text-decoration: none; padding: 8px 15px; background: #2b7a78; color: #fff; border-radius: 4px;">Ver Detalhes</a>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar imóveis do backend:', error);
            const container = document.getElementById('grid-imoveis');
            if (container) {
                container.innerHTML = '<p class="erro-api">Não foi possível carregar os imóveis. Verifique se o servidor backend está rodando.</p>';
            }
        });
}