const express = require("express");
const app = express(); // Inicializar servidor
const cors = require('cors');
app.use(cors()); // Habilitar CORS para todas las rutas
const port = 3001;

// Importar middlewares
// const error404 = require("./middlewares/error404");
// const morgan = require("./middlewares/morgan");

// Logger
// app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// Rutas
// const productsRoutes = require("./routes/products.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

// Rutas
// Definir una ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});
//API

const pool = require("./config/db_pgsql");

// app.use('/api/products',productsRoutes);

// app.use(error404); // Middleware gestiona error 404
// app.use("*",error404);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});