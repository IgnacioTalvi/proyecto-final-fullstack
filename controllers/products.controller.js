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

const deleteProduct = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "ID requerido" });
  }

  try {
    const deleted = await product.deleteProduct(id);
    if (deleted === 0) {
      return res
        .status(404)
        .json({ message: `No se encontró el producto con ID ${id}` });
    }
    res.status(200).json({ message: `Se ha borrado ${id}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al borrar producto" });
  }
};

module.exports = {getAllProducts, deleteProduct}

