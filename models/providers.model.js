const pool = require('../config/db_pgsql');
const queries = require('../queries/providers.queries') // Queries SQL

//GET ALL PROVIDERS
const getAllProviders = async () => {
let client, result;
try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllProviders)
    result = data.rows
} catch (err) {
    console.log(err);
    throw err;
} finally {
    client.release();
}
return result
}

//GET PROVIDER BY ID
const getProviderById = async (id) => {
  let client, result;
  try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.getProviderById, [id])
      result = data.rows
  } catch (err) {
      console.log(err);
      throw err;
  } finally {
      client.release();
  }
  return result
  }

// DELETE PROVIDER BY ID
const deleteProvider = async (id) => {
    const client = await pool.connect();
    try {
      const result = await client.query(queries.deleteProvider, [id]);
      return result.rowCount;
    } catch (err) {
      throw err;
    } finally {
      client.release();
    }
  };

module.exports = {getAllProviders, getProviderById, deleteProvider}