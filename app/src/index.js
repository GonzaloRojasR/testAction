// Importamos el framework Express
const express = require('express');
const app = express();

// Definimos el puerto desde una variable de entorno o por defecto 3000
const port = process.env.PORT || 3000;

// Definimos la ruta GET que retorna "¡Hola Mundo!"
app.get('/desafio', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Iniciamos el servidor escuchando en el puerto indicado
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
