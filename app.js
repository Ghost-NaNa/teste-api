const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);

// Catch-all: qualquer rota não registrada gera um erro 404 e cai no errorHandler
app.use((req, res, next) => {
  const error = new Error(`Rota não encontrada: ${req.method} ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
// DEVE ser o último middleware registrado — o Express o identifica pelos 4 parâmetros (err, req, res, next)
app.use(errorHandler);

module.exports = app;
