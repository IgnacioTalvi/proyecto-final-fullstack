const product = require("../models/products.model"); // Importar el modelo de la BBDD

// Get all products
const getAllProducts = async (req, res) => {
  let entries;
  try {
      entries = await product.getAllProducts();
    res.status(200).json(entries); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

// Create product
const createProduct = async (req, res) => {
  const { img_url, name, price, relevancy, provider_id } = req.body;

  try {
    await product.createProduct({img_url, name, price, relevancy, provider_id});
    res.status(201).send({ message: `Producto creado: ${name}` });
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: "Error al crear el producto" });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  const { id_product } = req.query;

  if (!id_product) {
    return res.status(400).json({ message: "ID del producto requerido" });
  }

  try {
    const deleted = await product.deleteProduct(id_product);
    if (deleted === 0) {
      return res
        .status(404)
        .json({ message: `No se encontró el producto con ID ${id_product}` });
    }
    res.status(200).json({ message: `Se ha borrado ${id_product}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al borrar producto" });
  }
};

module.exports = {getAllProducts,createProduct,deleteProduct}

