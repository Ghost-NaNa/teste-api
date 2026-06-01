const jwt = require('jsonwebtoken');

/**
 * Middleware de Autenticação JWT
 * Fluxo: extrai token do header → verifica → injeta req.user → chama next()
 * Em qualquer falha, cria um erro tipado e o delega via next(err) ao errorHandler global.
 */
module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  // Espera o formato: "Bearer <token>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    const error = new Error('Acesso negado. Nenhum token fornecido.');
    error.statusCode = 401;
    return next(error); // → errorHandler
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Injeta o payload decodificado na requisição
    next();             // Token válido: passa para o próximo handler
  } catch (err) {
    err.statusCode = 403;
    err.message = 'Token inválido ou expirado.';
    next(err); // → errorHandler
  }
};
