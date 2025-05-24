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

module.exports = {getAllProviders}