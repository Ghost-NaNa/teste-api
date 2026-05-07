const { Router } = require('express');

const userRoutes = require('./user.routes');
// Importe outras rotas aqui conforme necessário

const router = Router();

router.use('/users', userRoutes);
// router.use('/products', productRoutes);

module.exports = router;
