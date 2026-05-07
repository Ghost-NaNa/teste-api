const User = require('../models/User');

class UserController {
  // GET /api/users
  index(req, res) {
    const users = User.findAll();
    return res.json({ success: true, data: users });
  }

  // GET /api/users/:id
  show(req, res) {
    const user = User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
    }

    return res.json({ success: true, data: user });
  }

  // POST /api/users
  store(req, res) {
    const { name, email } = req.body;

    const existing = User.findByEmail(email);
    if (existing) {
      return res.status(409).json({ success: false, message: 'E-mail já cadastrado.' });
    }

    const user = User.create({ name, email });
    return res.status(201).json({ success: true, data: user });
  }

  // PUT /api/users/:id
  update(req, res) {
    const { name, email } = req.body;

    const user = User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
    }

    const emailTaken = User.findByEmail(email);
    if (emailTaken && emailTaken.id !== user.id) {
      return res.status(409).json({ success: false, message: 'E-mail já está em uso.' });
    }

    const updated = User.update(req.params.id, { name, email });
    return res.json({ success: true, data: updated });
  }

  // DELETE /api/users/:id
  destroy(req, res) {
    const deleted = User.delete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
    }

    return res.status(204).send();
  }
}

module.exports = new UserController();
