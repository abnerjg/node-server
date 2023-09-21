const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  { id: 1, description: 'Hacer las compras', completada: false },
  { id: 2, description: 'Vender el coche', completada: true },
  { id: 3, description: 'Estudiar node', pendiente: false },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});