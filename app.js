import express from "express"

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("Aprendi a upar API'S no vercel!");
});

app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});
