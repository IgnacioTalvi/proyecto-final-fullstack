const getAllProviders = `SELECT 
      *
    FROM providers;`;

const getProviderById = 
    "SELECT * FROM providers WHERE id_provider = $1";    

const deleteProvider = `DELETE FROM providers
    WHERE id = $1
    RETURNING *`;    

module.exports = {getAllProviders, getProviderById,deleteProvider}