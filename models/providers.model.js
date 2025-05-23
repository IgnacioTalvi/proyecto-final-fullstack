const pool = require('../config/db_pgsql');
const queries = require('../queries/providers.queries') // Queries SQL

//GET ALL PRODUCTS
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

module.exports = {getAllProviders}