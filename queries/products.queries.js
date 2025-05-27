const getAllProducts = `SELECT 
      *
    FROM products;`;

const getProductsWithProviderName = `
    SELECT 
      products.id_product,
      products.name,
      products.price,
      products.img_url,
      products.relevancy,
      products.provider_id,
      providers.name AS provider_name
    FROM products
    JOIN providers ON products.provider_id = providers.id_provider
  `;  

const createProduct = `
    INSERT INTO products (img_url, name, price, relevancy, provider_id)
    VALUES ($1, $2, $3, $4, $5)
    `;

const deleteProduct = `DELETE FROM products
    WHERE id_product = $1
    RETURNING *`;


module.exports = {getAllProducts, getProductsWithProviderName, createProduct, deleteProduct}