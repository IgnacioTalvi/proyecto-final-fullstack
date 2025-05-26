const provider = require("../models/providers.model"); // Importar el modelo de la BBDD

const getAllProviders = async (req, res) => {
  let entries;
  try {
      entries = await provider.getAllProviders();
    res.status(200).json(entries); // [] con las entries encontradas
  } catch (error) {
    res.status(500).json({ error: "Error en la BBDD" });
  }
};

const deleteProvider= async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "ID del proveedor requerido" });
  }

  try {
    const deleted = await product.deleteProvider(id);
    if (deleted === 0) {
      return res
        .status(404)
        .json({ message: `No se encontró el proveedor con ID ${id}` });
    }
    res.status(200).json({ message: `Se ha borrado ${id}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al borrar proveedor" });
  }
};

module.exports = {getAllProviders, deleteProvider}