# 🚀 Node.js + Express — Arquitetura MVC

Modelo genérico de API REST com Node.js e Express seguindo o padrão MVC.

## 📁 Estrutura de Pastas

```
mvc-server/
├── src/
│   ├── server.js               # Ponto de entrada — inicia o servidor
│   ├── app.js                  # Configuração do Express (middlewares e rotas)
│   ├── controllers/            # (C) Lógica de cada requisição
│   │   └── UserController.js
│   ├── models/                 # (M) Acesso e manipulação de dados
│   │   └── User.js
│   ├── routes/                 # Definição das rotas da API
│   │   ├── index.js            # Agregador de rotas
│   │   └── user.routes.js
│   └── middlewares/            # Middlewares globais e de validação
│       ├── errorHandler.js
│       ├── notFound.js
│       └── validators/
│           └── user.validator.js
├── tests/
│   └── user.test.js
├── .env.example
└── package.json
```

## ⚙️ Como usar

```bash
# 1. Instalar dependências
npm install

# 2. Configurar variáveis de ambiente
cp .env.example .env

# 3. Rodar em desenvolvimento (com hot-reload)
npm run dev

# 4. Rodar em produção
npm start

# 5. Executar testes
npm test
```

## 🔗 Endpoints disponíveis

| Método | Rota              | Descrição               |
|--------|-------------------|-------------------------|
| GET    | /health           | Health check do servidor |
| GET    | /api/users        | Listar todos os usuários |
| GET    | /api/users/:id    | Buscar usuário por ID    |
| POST   | /api/users        | Criar novo usuário       |
| PUT    | /api/users/:id    | Atualizar usuário        |
| DELETE | /api/users/:id    | Remover usuário          |

## 🏗️ Como adicionar um novo recurso

1. **Model** → crie `src/models/Produto.js`
2. **Controller** → crie `src/controllers/ProdutoController.js`
3. **Rotas** → crie `src/routes/produto.routes.js`
4. **Registre** a rota em `src/routes/index.js`

## 📦 Dependências

| Pacote              | Uso                              |
|---------------------|----------------------------------|
| express             | Framework HTTP                   |
| dotenv              | Variáveis de ambiente            |
| cors                | Cross-Origin Resource Sharing    |
| helmet              | Cabeçalhos de segurança HTTP     |
| express-validator   | Validação de dados do body       |
| nodemon (dev)       | Hot-reload em desenvolvimento    |
| jest + supertest    | Testes automatizados             |
