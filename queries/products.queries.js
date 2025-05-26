const getAllProducts = `SELECT 
      *
    FROM products;`;

const createProduct = `
    INSERT INTO products (img_url, name, price, relevancy, provider_id)
    VALUES ($1, $2, $3, $4, $5)
    `;

const deleteProduct = `DELETE FROM products
    WHERE id_product = $1
    RETURNING *`;


module.exports = {getAllProducts, createProduct, deleteProduct}