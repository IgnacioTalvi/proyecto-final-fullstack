const pool = require('../config/db_pgsql');
const queries = require('../queries/products.queries') // Queries SQL

//GET ALL PRODUCTS
const getAllProducts = async () => {
let client, result;
try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getProductsWithProviderName)
    result = data.rows
} catch (err) {
    console.log(err);
    throw err;
} finally {
    client.release();
}
return result
}

// CREATE PRODUCT BY NAME
const createProduct = async ({ img_url, name, price, relevancy, provider_id}) => {
    const client = await pool.connect();
    try {
      const data = await client.query(queries.createProduct, [
        img_url, 
        name, 
        price, 
        relevancy, 
        provider_id
      ]);
      return data.rowCount;
    } catch (err) {
      throw err;
    } finally {
      client.release();
    }
  };

// DELETE PRODUCT BY ID
const deleteProduct = async (id_product) => {
    const client = await pool.connect();
    try {
      const result = await client.query(queries.deleteProduct, [id_product]);
      return result.rowCount;
    } catch (err) {
      throw err;
    } finally {
      client.release();
    }
  };

module.exports = {getAllProducts, deleteProduct,createProduct}