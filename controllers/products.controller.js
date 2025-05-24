const product = require("../models/products.model"); // Importar el modelo de la BBDD

const getAllProducts = async (req, res) => {
  let entries;
  try {
      entries = await product.getAllProducts();
    res.status(200).json(entries); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

module.exports = {getAllProducts}

