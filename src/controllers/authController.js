const jwt = require('jsonwebtoken');

// ─── Mock de Usuário ──────────────────────────────────────────────────────────
// Em produção, substitua por uma consulta real ao banco de dados (Model).
const MOCK_USER = {
  id: 1,
  email: 'admin@exemplo.com',
  password: 'senha123',
  role: 'admin',
};

// ─── POST /api/auth/login ─────────────────────────────────────────────────────
exports.login = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error('E-mail e senha são obrigatórios.');
      error.statusCode = 400;
      return next(error); // → errorHandler
    }

    if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
      const error = new Error('Credenciais inválidas.');
      error.statusCode = 401;
      return next(error); // → errorHandler
    }

    const payload = { id: MOCK_USER.id, email: MOCK_USER.email, role: MOCK_USER.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      success: true,
      message: 'Login realizado com sucesso.',
      token,
    });
  } catch (err) {
    next(err); // Erros inesperados → errorHandler
  }
};

// ─── GET /api/auth/profile (rota protegida) ───────────────────────────────────
// req.user foi injetado pelo middleware auth.js antes de chegar aqui
exports.getProfile = (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (err) {
    next(err);
  }
};

// ─── GET /api/auth/trigger-error (para testar o errorHandler) ────────────────
exports.triggerError = (req, res, next) => {
  try {
    // Simula qualquer erro de lógica de negócio ou de banco de dados
    throw new Error('Erro simulado para teste do errorHandler!');
  } catch (err) {
    err.statusCode = 500;
    next(err); // → errorHandler
  }
};
