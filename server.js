const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  { id: 1, description: 'Hacer las compras', completed: false },
  { id: 2, description: 'Vender el coche', completed: true },
  { id: 3, description: 'Estudiar node', completed: false },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});