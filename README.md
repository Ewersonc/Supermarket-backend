# Supermarket‑backend

Backend criado com **Node.js + Express**, responsável por fornecer a API
utilizada pelo frontend Supermarket‑React. Estruturado seguindo boas
práticas de organização e responsabilidade.

------------------------------------------------------------------------

## 🎯 Objetivo do Backend

-   Fornecer dados para o frontend\
-   Organizar rotas e controladores separadamente\
-   Possibilitar CRUD de produtos e categorias\
-   Demonstrar arquitetura de API REST simples e escalável

------------------------------------------------------------------------

## 🧰 Tecnologias Utilizadas

-   **Node.js**
-   **Express**
-   **Nodemon** (ambiente de dev)
-   (Adicionar caso exista: MongoDB, Mongoose, UUID, Cors, Dotenv etc.)

------------------------------------------------------------------------

## 📁 Estrutura do Projeto

    Supermarket-backend/
    │
    ├── controllers/            # Lógica das rotas
    │   ├── productController.js
    │   └── categoryController.js
    │
    ├── routes/                 # Definição das rotas
    │   ├── productRoutes.js
    │   └── categoryRoutes.js
    │
    ├── models/                 # Modelos (se houver DB)
    │
    ├── server.js               # Inicialização do servidor
    ├── app.js                  # Configuração principal
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## 🌐 Endpoints Disponíveis

### ▶️ Produtos

  Método   Endpoint        Descrição
  -------- --------------- --------------------------
  GET      /products       Lista todos os produtos
  GET      /products/:id   Retorna um único produto
  POST     /products       Cria um produto
  PUT      /products/:id   Atualiza um produto
  DELETE   /products/:id   Remove um produto

### ▶️ Categorias

  Método   Endpoint      Descrição
  -------- ------------- ------------------
  GET      /categories   Lista categorias

*Obs.: Ajuste conforme existir no seu projeto.*

------------------------------------------------------------------------

## 🚀 Como Rodar o Backend

### 1. Clonar o repositório

``` bash
git clone https://github.com/Ewersonc/Supermarket-backend
```

### 2. Acessar o diretório

``` bash
cd Supermarket-backend
```

### 3. Instalar dependências

``` bash
npm install
```

### 4. Rodar o servidor

``` bash
npm start
```

### 5. Porta padrão

    http://localhost:5173/

------------------------------------------------------------------------

## ⚙️ Configuração de Variáveis de Ambiente (se existir)

Criar `.env`:

    PORT=3000
    DATABASE_URL=mongodb://...

------------------------------------------------------------------------

## 🛠 Melhorias Futuras

-   Implementar banco de dados real
-   Middleware de erros
-   Paginação para listagem de produtos
-   Documentação Swagger
-   Logs detalhados

------------------------------------------------------------------------

## 👨‍💻 Autor

**Ewerson Costa**
