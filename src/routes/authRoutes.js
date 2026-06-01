const { Router } = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/auth');

const router = Router();

// ─── Rotas Públicas ───────────────────────────────────────────────────────────
router.post('/login', authController.login);
router.get('/trigger-error', authController.triggerError);

// ─── Rotas Protegidas ─────────────────────────────────────────────────────────
// authMiddleware intercepta a requisição ANTES do controller.
// Se o token for inválido, o middleware chama next(err) e o controller nunca é executado.
router.get('/profile', authMiddleware, authController.getProfile);

module.exports = router;
