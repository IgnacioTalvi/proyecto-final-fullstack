const getAllProducts = `SELECT 
      *
    FROM products;`;

const deleteProduct = `DELETE FROM products
    WHERE id = $1
    RETURNING *`;

const createProduct = `
    INSERT INTO authors (img_url, name, price, relevancy, provider_id)
    VALUES ($1, $2, $3, $4)
    `;

module.exports = {getAllProducts, createProduct, deleteProduct}