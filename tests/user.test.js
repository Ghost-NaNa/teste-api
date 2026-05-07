const request = require('supertest');
const app = require('../src/app');

describe('Users API', () => {
  it('GET /api/users → deve retornar lista de usuários', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /api/users/:id → deve retornar um usuário existente', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('id', 1);
  });

  it('GET /api/users/:id → deve retornar 404 para usuário inexistente', async () => {
    const res = await request(app).get('/api/users/9999');
    expect(res.status).toBe(404);
  });

  it('POST /api/users → deve criar um novo usuário', async () => {
    const res = await request(app).post('/api/users').send({
      name: 'Carlos Teste',
      email: 'carlos@teste.com',
    });
    expect(res.status).toBe(201);
    expect(res.body.data).toHaveProperty('email', 'carlos@teste.com');
  });

  it('POST /api/users → deve retornar 422 para dados inválidos', async () => {
    const res = await request(app).post('/api/users').send({ name: '', email: 'invalido' });
    expect(res.status).toBe(422);
    expect(res.body.errors).toBeDefined();
  });

  it('DELETE /api/users/:id → deve remover usuário existente', async () => {
    const res = await request(app).delete('/api/users/2');
    expect(res.status).toBe(204);
  });
});
