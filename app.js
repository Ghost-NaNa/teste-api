import express from "express"

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Aprendi a upar API'S no vercel!");
});

app.get('/itens', (req, res) => {
  const itens = {
  "id": 101,
  "status": "active",
  "timestamp": "2026-05-06T21:16:00Z",
  "user": {
    "name": "Nathan Teste",
    "email": "nathan@example.com",
    "roles": ["developer", "student"],
    "preferences": {
      "theme": "dark-pastel-purple",
      "notifications": true
    }
  },
  "project": {
    "title": "Triage System",
    "version": "1.0.0",
    "is_deployed": true,
    "tags": ["express", "node", "vercel"]
  },
  "metadata": null
}
  res.status(200).json(itens)
  
})

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
