const { Router } = require('express');
const UserController = require('../controllers/UserController');
const { validateUser } = require('../middlewares/validators/user.validator');

const router = Router();

// GET /api/users
router.get('/', UserController.index);

// GET /api/users/:id
router.get('/:id', UserController.show);

// POST /api/users
router.post('/', validateUser, UserController.store);

// PUT /api/users/:id
router.put('/:id', validateUser, UserController.update);

// DELETE /api/users/:id
router.delete('/:id', UserController.destroy);

module.exports = router;
