const getAllProviders = `SELECT 
      *
    FROM providers;`;

    const deleteProvider = `DELETE FROM providers
    WHERE id = $1
    RETURNING *`;    

    module.exports = {getAllProviders, deleteProvider}