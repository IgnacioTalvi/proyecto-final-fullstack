import { useState, useEffect } from 'react'
import './App.css'

function App() {

const [products, setProducts] = useState([]);

const API_URL = "http://localhost:3001/api/products";

// Fetch all products
useEffect(() => {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching products");
      }
      return response.json();
    })
    .then((data) => setProducts(data))
    .catch((error) => setError(error.message));
}, []);

  return (
    <>
      <div>
      {products.map(product => (
          <article key={product.id_product}>
            <img src={product.img_url} alt={product.name} className="product_img"/>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </article>
        ))}
      </div>
    </>
  )
}

export default App
