# 🏢 Premium Imóveis

Plataforma imobiliária full stack com **API REST em Java (Spring Boot)** e dois front-ends independentes: um **portal do cliente** para busca de imóveis e um **backoffice administrativo** para cadastro e gestão do catálogo.

---

## ✨ Funcionalidades

### 🏠 Portal do Cliente (`/portal`)
- Vitrine dinâmica com todos os imóveis cadastrados, carregados pela API
- Busca por bairro ou endereço, com abas por categoria (Casas, Apartamentos, Lançamentos)
- Página de detalhes com galeria, localização e características (dormitórios, banheiros, vagas)
- Botão **Contatar Imobiliária** integrado ao WhatsApp
- Layout responsivo com CSS Grid e Flexbox

### ⚙️ Backoffice (`/admin`)
- Cadastro de novos imóveis com upload de foto (opcional)
- Listagem em tempo real dos imóveis registrados no banco de dados
- Ações sobre cada registro direto na tabela

### 🔌 API REST (`/src`)
- Endpoints para listar, cadastrar, atualizar e remover imóveis
- Persistência com Spring Data JPA / Hibernate

---

## 🛠️ Tecnologias

- Java 21
- Spring Boot 3
- Spring Web
- Spring Data JPA
- Hibernate
- H2 Database
- Maven
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome

---

<img width="1568" height="609" alt="image" src="https://github.com/user-attachments/assets/7617261a-c612-4b52-a037-5aeafb6f718b" />


<img width="1568" height="770" alt="image" src="https://github.com/user-attachments/assets/c3a02001-5a09-4607-addc-9cad9e635fbb" />


<img width="1568" height="778" alt="image" src="https://github.com/user-attachments/assets/3d02a93d-76e0-471a-ba81-e7eddc67277a" />



## 🏗️ Arquitetura

O projeto é dividido em três partes independentes:

- **Portal do Cliente** e **Backoffice**: front-ends em HTML, CSS e JavaScript que consomem a API via `fetch` em JSON.
- **API REST**: back-end em Spring Boot organizado em camadas (Controller, Service e Repository) com Spring Data JPA.
- **Banco de dados**: H2 em memória, acessado pela API através do Hibernate.

---

## 🚀 Como executar localmente

### Pré-requisitos

- **Java JDK 21**
- **Git**

Não é preciso instalar o Maven nem um banco de dados: o projeto usa o Maven Wrapper (`mvnw`) e o H2 em memória.

### 1. Clonar o repositório

```bash
git clone https://github.com/Pedro-F7/imobiliaria-premium.git
cd imobiliaria-premium
```

### 2. Subir a API

```bash
# Linux / macOS
./mvnw spring-boot:run

# Windows
mvnw.cmd spring-boot:run
```

Por padrão, a API fica disponível em `http://localhost:8080`.

> 💡 Como o banco H2 roda em memória, os dados são apagados sempre que a aplicação é reiniciada.

### 3. Abrir os front-ends

Os front-ends são estáticos. Abra o `index.html` de cada pasta com uma extensão como **Live Server** (VS Code):

- Portal do cliente: `portal/index.html`
- Backoffice: `admin/index.html`

---

## 👨‍💻 Autor

**Pedro** · [GitHub](https://github.com/Pedro-F7)

---

⭐ Se o projeto te ajudou ou chamou atenção, deixe uma estrela!

