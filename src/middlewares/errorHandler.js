/**
 * Middleware Global de Tratamento de Erros
 *
 * Regra de Ouro: todo erro da aplicação (síncrono ou assíncrono) DEVE chegar
 * aqui via next(err). Nunca envie res.status() diretamente nos controllers.
 *
 * O Express reconhece este middleware pelos 4 parâmetros: (err, req, res, next).
 */
module.exports = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  // Log completo no servidor para diagnóstico
  console.error(`[ERROR] ${err.message}\n`, err.stack);

  const statusCode = err.statusCode || 500;

  // Resposta JSON padronizada para o cliente
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: err.message || 'Erro interno do servidor.',
  });
};
