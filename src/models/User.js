/**
 * Model de Usuário
 *
 * Em um projeto real, este arquivo integraria com um ORM (ex: Sequelize, Prisma)
 * ou faria queries diretamente ao banco de dados.
 *
 * Aqui usamos um array em memória para fins didáticos.
 */

// Simulação de banco de dados em memória
let users = [
  { id: 1, name: 'João Silva', email: 'joao@email.com', createdAt: new Date().toISOString() },
  { id: 2, name: 'Maria Souza', email: 'maria@email.com', createdAt: new Date().toISOString() },
];

let nextId = 3;

class User {
  static findAll() {
    return users;
  }

  static findById(id) {
    return users.find((u) => u.id === Number(id)) || null;
  }

  static findByEmail(email) {
    return users.find((u) => u.email === email) || null;
  }

  static create({ name, email }) {
    const user = { id: nextId++, name, email, createdAt: new Date().toISOString() };
    users.push(user);
    return user;
  }

  static update(id, { name, email }) {
    const index = users.findIndex((u) => u.id === Number(id));
    if (index === -1) return null;

    users[index] = { ...users[index], name, email, updatedAt: new Date().toISOString() };
    return users[index];
  }

  static delete(id) {
    const index = users.findIndex((u) => u.id === Number(id));
    if (index === -1) return false;

    users.splice(index, 1);
    return true;
  }
}

module.exports = User;
