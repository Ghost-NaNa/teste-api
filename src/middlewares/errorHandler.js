/**
 * Middleware global de tratamento de erros.
 * Deve ser registrado por último no app.js.
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.stack || err.message}`);

  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Erro interno do servidor.';

  return res.status(status).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
