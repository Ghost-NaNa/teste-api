import express from "express"

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Arthur é legal');
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});