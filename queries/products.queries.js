const getAllProducts = `SELECT 
      *
    FROM products;`;

const deleteProduct = `DELETE FROM products
    WHERE id = $1
    RETURNING *`;

    module.exports = {getAllProducts, deleteProduct}