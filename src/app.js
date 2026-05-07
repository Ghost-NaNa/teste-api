const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

const app = express();

// ─── Middlewares Globais ─────────────────────────────────────────────────────
app.use(helmet());           // Cabeçalhos de segurança
app.use(cors());             // Habilita CORS
app.use(express.json());     // Parse de JSON no body
app.use(express.urlencoded({ extended: true })); // Parse de form data

// ─── Rotas ───────────────────────────────────────────────────────────────────
app.use('/api', routes);

// ─── Rota de Health Check ─────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Middlewares de Erro ─────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;
