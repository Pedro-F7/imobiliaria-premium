🏢 Premium Imóveis

Plataforma imobiliária full stack com API REST em Java (Spring Boot) e dois front-ends independentes: um portal do cliente para busca de imóveis e um backoffice administrativo para cadastro e gestão do catálogo.

📸 Demonstração

<img width="1568" height="609" alt="image" src="https://github.com/user-attachments/assets/afe0e68d-f46f-4efc-be48-c59811b90cee" />

<img width="1568" height="770" alt="image" src="https://github.com/user-attachments/assets/79682014-baf9-4ece-87c4-bd77442a56c2" />


<img width="1568" height="778" alt="image" src="https://github.com/user-attachments/assets/d619e71e-c9a8-470a-a762-bd3a077c5c08" />

✨ Funcionalidades
🏠 Portal do Cliente (/portal)
Vitrine dinâmica com todos os imóveis cadastrados, carregados pela API
Busca por bairro ou endereço, com abas por categoria (Casas, Apartamentos, Lançamentos)
Página de detalhes com galeria, localização e características (dormitórios, banheiros, vagas)
Botão Contatar Imobiliária integrado ao WhatsApp
Layout responsivo com CSS Grid e Flexbox
⚙️ Backoffice (/admin)
Cadastro de novos imóveis com upload de foto (opcional)
Listagem em tempo real dos imóveis registrados no banco de dados
Ações sobre cada registro direto na tabela
🔌 API REST (/src)
Endpoints para listar, cadastrar, atualizar e remover imóveis
Persistência com Spring Data JPA / Hibernate
🛠️ Tecnologias
Camada	Tecnologias
Back-end	Java 21, Spring Boot 3, Spring Web, Spring Data JPA, Hibernate, Maven
Banco de dados	H2 (em memória)
Front-end	HTML5, CSS3 (variáveis CSS, Grid, Flexbox), JavaScript ES6+ (Fetch API)
Ícones	Font Awesome
🏗️ Arquitetura
┌──────────────────┐        ┌──────────────────┐
│  Portal Cliente  │        │    Backoffice    │
│  (HTML/CSS/JS)   │        │   (HTML/CSS/JS)  │
└────────┬─────────┘        └────────┬─────────┘
         │        fetch / JSON       │
         └──────────────┬────────────┘
                        ▼
              ┌───────────────────┐
              │     API REST      │
              │   Spring Boot     │
              │ Controller →      │
              │ Service →         │
              │ Repository (JPA)  │
              └─────────┬─────────┘
                        ▼
                  ┌───────────┐
                  │ H2 (mem.) │
                  └───────────┘
Estrutura de pastas
imobiliaria-premium/
├── src/                  # API Spring Boot (código Java)
├── portal/               # Front-end do cliente
├── admin/                # Backoffice administrativo
├── docs/screenshots/     # Imagens usadas neste README
├── pom.xml
└── README.md
🚀 Como executar localmente
Pré-requisitos
Java JDK 21
Git

Não é preciso instalar o Maven nem um banco de dados: o projeto usa o Maven Wrapper (mvnw) e o H2 em memória.

1. Clonar o repositório
bash
git clone https://github.com/Pedro-F7/imobiliaria-premium.git
cd imobiliaria-premium
2. Subir a API
bash
# Linux / macOS
./mvnw spring-boot:run

# Windows
mvnw.cmd spring-boot:run

Por padrão, a API fica disponível em http://localhost:8080.

💡 Como o banco H2 roda em memória, os dados são apagados sempre que a aplicação é reiniciada.

3. Abrir os front-ends

Os front-ends são estáticos. Abra o index.html de cada pasta com uma extensão como Live Server (VS Code):

Portal do cliente: portal/index.html
Backoffice: admin/index.html
👨‍💻 Autor

Pedro · GitHub

⭐ Se o projeto te ajudou ou chamou atenção, deixe uma estrela!

