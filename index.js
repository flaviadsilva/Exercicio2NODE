const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

// Rota de soma
app.get('/soma/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a + b;
  res.send(`Resultado da soma: ${resultado}`);
});

// Rota de subtração
app.get('/subtrair/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a - b;
  res.send(`Resultado da subtração: ${resultado}`);
});

// Rota de multiplicação
app.get('/multiplicar/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  const resultado = a * b;
  res.send(`Resultado da multiplicação: ${resultado}`);
});

// Rota de divisão
app.get('/dividir/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (b === 0) {
    return res.status(400).send('Erro: divisão por zero não é permitida.');
  }

  const resultado = a / b;
  res.send(`Resultado da divisão: ${resultado}`);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
