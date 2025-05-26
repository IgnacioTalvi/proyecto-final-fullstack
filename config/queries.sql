-- Crear tabla providers
CREATE TABLE providers (
    id_provider SERIAL PRIMARY KEY, 
    name VARCHAR(100) NOT NULL,
    cif VARCHAR(20) NOT NULL UNIQUE, 
    address VARCHAR(100) NOT NULL UNIQUE
);

-- Crear tabla products
CREATE TABLE products (
    id_product SERIAL PRIMARY KEY, 
    img_url TEXT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL, 
    relevancy VARCHAR(100) NOT NULL,
    provider_id INTEGER REFERENCES providers(id_provider) ON DELETE SET NULL
);

