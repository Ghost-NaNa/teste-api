const { body, validationResult } = require('express-validator');

const validateUser = [
  body('name')
    .trim()
    .notEmpty().withMessage('O nome é obrigatório.')
    .isLength({ min: 2 }).withMessage('O nome deve ter no mínimo 2 caracteres.'),

  body('email')
    .trim()
    .notEmpty().withMessage('O e-mail é obrigatório.')
    .isEmail().withMessage('Informe um e-mail válido.')
    .normalizeEmail(),

  // Middleware que verifica os erros e retorna 422 se houver
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: 'Dados inválidos.',
        errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
      });
    }
    next();
  },
];

module.exports = { validateUser };
