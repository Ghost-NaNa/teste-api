/**
 * Middleware para rotas não encontradas (404).
 */
const notFound = (req, res) => {
  return res.status(404).json({
    success: false,
    message: `Rota '${req.method} ${req.originalUrl}' não encontrada.`,
  });
};

module.exports = notFound;
